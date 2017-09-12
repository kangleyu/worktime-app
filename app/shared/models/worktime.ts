import { IModel } from "./base.model";

export class IWorktime implements IModel {
  id: number;
  employee: string;
  project: string;
  worktype: string;
  year: number;
  month: number;
  worktime: number;
  verified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
