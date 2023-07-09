import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/test';
const baseUrl1 = 'http://localhost:8080/api/loginTest';

@Injectable({
  providedIn: 'root'
})
export class LoginTestService {

  constructor(private http: HttpClient) { }

    findbyNm(data: any):Observable<any> {
      console.log(data);
      let queryParams = new HttpParams();
      queryParams = queryParams.append("username",data);
      return this.http.get(baseUrl1,{params:queryParams});
    }
    guessNum(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
  }

