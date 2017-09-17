import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class StaticsService {
  url = "http://localhost:8010/api/statics";

  constructor(
    http: Http,
    url: string) {
  }
}
