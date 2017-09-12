import { IModel } from "./base.model";

export class IProject implements IModel {
  id: number;
  name: string;
  address: string;
  manager: string;
  state: string;
  createdAt?: Date;
  updatedAt?: Date;
}
