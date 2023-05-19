export interface ProductItemInterface {
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ProductItemProps {
  product: ProductItemInterface;
}
