import getStripe from "../../../utils/getStripe";
import { toast } from "react-toastify";
import { CartState } from "../../../types/cart";

export const useCartCheckout = (state: CartState) => {
  const onCheckout = async () => {
    const stripe = await getStripe();
    if (stripe) {
      const response = await fetch("/api/payment/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.statusCode === 500) return;

      const data = await response.json();
      toast.loading("Redirecting...");
      await stripe.redirectToCheckout({ sessionId: data.id });
    }
  };

  return {
    onCheckout,
  };
};
