import { IModel } from "./base.model";

export class IPayment implements IModel {
  id: number;
  employee: string;
  project: string;
  isUpperHalf: boolean;
  worktype: string;
  year: number;
  month: number;
  paid: number;
  verified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
