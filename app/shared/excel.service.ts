import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportTableToExcel(htmlTable: any, excelFileName: string): void {
    let csv: string = "";

    for (const tb of htmlTable[0].tBodies) {
      csv += tb.innerText.replace(/\t+/g, ",");
      csv += "\n";
    }

    this.saveAsExcelFile(csv, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
