import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import nc from "next-connect";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2020-08-27",
});

const handler = nc();
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1KsTYbAGnb7XUybxE7wjSurI" }],
      line_items: req.body.map((item: any) => {
        //TODO: Make normal error handler
        const {
          product: { price, name, image },
          quantity,
        } = item;
        if (!image) return;
        if (!quantity || typeof quantity !== "number") return;
        if (!price || typeof price !== "number") return;
        if (!name || typeof name !== "string") return;

        const img = image.length > 0 ? image[0].asset._ref : image.asset._ref;
        const newImage = img
          .replace(
            "image-",
            "https://cdn.sanity.io/images/8ej5l3yi/production/"
          )
          .replace("-webp", ".webp");

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name,
              images: [newImage],
            },
            unit_amount: price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: quantity,
        };
      }),
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/canceled`,
    };

    // Create Checkout Sessions from body params.
    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    res.status(200).json(session);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

export default handler;
