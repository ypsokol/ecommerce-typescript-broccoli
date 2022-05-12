export type ProductType = {
  _id: string;
  slug: Slug;
  name: string;
  price: number;
  image: Image;
  description: string;
  brand: string;
  category: string;
  rating: number;
  numReviews: number;
  countInStock: number;
};

export type Slug = {
  current: string;
  _type: string;
};

export type Image = {
  asset: Asset;
  _type: string;
};
type Asset = {
  _ref: string;
  _type: string;
};
