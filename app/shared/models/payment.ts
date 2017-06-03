export interface IPayment {
  id: number;
  employee: string;
  project: string;
  isUpperHalf: boolean;
  worktype: string;
  year: number;
  month: number;
  paid: number;
  createdAt: Date;
  updatedAt: Date;
}
