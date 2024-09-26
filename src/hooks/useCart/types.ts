import { IProduct } from "../../types";

export interface IUpsertCartMutationData {
  productId: IProduct["id"];
  amount?: number;
}
