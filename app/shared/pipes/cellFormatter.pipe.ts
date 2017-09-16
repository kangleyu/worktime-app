import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";
import { MonthPipe, StatusPipe, VerifiedStatusPipe } from "../index";
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: "cellFormatter"
})
export class CellFormatterPipe implements PipeTransform {

  constructor(
    private month: MonthPipe,
    private status: StatusPipe,
    private date: DatePipe,
    private verify: VerifiedStatusPipe,
    private sanitizer: DomSanitizer) {
  }

  transform(value: any, pattern?: string): any {
    switch (pattern) {
      case "createdAt":
      case "updatedAt":
        return this.sanitizer.bypassSecurityTrustHtml(this.date.transform(value, "yyyy-MM-dd"));
      case "state":
        return this.sanitizer.bypassSecurityTrustHtml(this.status.transform(value));
      case "isUpperHalf":
        return this.sanitizer.bypassSecurityTrustHtml(this.month.transform(value));
      case "verified":
        return this.sanitizer.bypassSecurityTrustHtml(this.verify.transform(value));
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}
