import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";
import { MonthPipe, StatusPipe, VerifiedStatusPipe } from "../index";

@Pipe({
  name: "cellFormatter"
})
export class CellFormatterPipe implements PipeTransform {

  constructor(
    private month: MonthPipe,
    private status: StatusPipe,
    private date: DatePipe,
    private verify: VerifiedStatusPipe) {
  }

  transform(value: any, pattern?: string): any {
    switch (pattern) {
      case "createdAt":
      case "updatedAt":
        return this.date.transform(value, "yyyy-MM-dd");
      case "state":
        return this.status.transform(value);
      case "isUpperHalf":
        return this.month.transform(value);
      case "verified":
        return this.verify.transform(value);
      default:
        return value;
    }
  }
}
