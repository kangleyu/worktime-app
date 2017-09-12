import { IModel } from "./base.model";
export class IEmployee implements IModel {
  id: number;
  name: string;
  phone: string;
  email: string;
  age: number;
  gender: string;
  idCard: string;
  createdAt?: Date;
  updatedAt?: Date;
}
