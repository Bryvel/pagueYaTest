import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:5090/api';

  constructor(private http: HttpClient) {}

  post(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  get(endpoint: string) {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

 getList(endpoint: string) {
    return this.http.get<[]>(`${this.baseUrl}/${endpoint}`);
  }

    
}