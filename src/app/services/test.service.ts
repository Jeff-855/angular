import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Test } from '../models/test.model';

const baseUrl = 'http://localhost:8080/api/test';
const baseUrl1 = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  guessNum(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
