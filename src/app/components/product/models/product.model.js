import { BaseModel } from "../../../models/base.model";

export class ProductModel extends BaseModel {
  productImages: string;
  productName: string;
  originalPrice: number;
  salePrice: number;
  totalRatingCount: number;
  averageRating: number
}
