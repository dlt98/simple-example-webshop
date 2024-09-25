export interface ICartLocalStorage {
  products: ICartSingleProduct[];
}

export interface ICartSingleProduct {
  id: number;
  amount: number;
}
