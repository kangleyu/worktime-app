import { IModel } from "./base.model";

export class IWorktype implements IModel {
  id: number;
  worktype: string;
  lead: string;
  createdAt?: Date;
  updatedAt?: Date;
}
