export interface ICartLocalStorage {
  products: ICartSingleProduct[];
}

export interface ICartSingleProduct {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  amount: number;
}
