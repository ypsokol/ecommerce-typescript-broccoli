import imageUrlBuilder from "@sanity/image-url";
import { Image } from "../types/product";
import client from "./client";

const builder = imageUrlBuilder(client);

export const urlForThumbnail = (source: Image) =>
	builder.image(source).width(300).url();

export const urlFor = (source: Image) =>
	builder.image(source).width(580).url();
