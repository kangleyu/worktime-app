import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Constants } from "./index";

@Injectable()
export class AuthenticationService {
  public token: string;
  private currentUser = "currentUser";

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem(this.currentUser));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = {};
    body['username'] = username;
    body['password'] = password;
    return this.http.post(Constants.authenticate, body, new RequestOptions({ headers }))
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem(this.currentUser, JSON.stringify({ username, token }));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem(this.currentUser);
  }

  getHttpOptions(): RequestOptions {
    const headers = new Headers({ Authorization: 'Bearer' + this.token });
    const options = new RequestOptions({ headers });
    return options;
  }
}
