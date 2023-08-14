export interface Shoes {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  brand: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
}

export interface AddShoes {
  name: string;
  price: number;
  image: string;
  description: string;
  brand: string;
}
