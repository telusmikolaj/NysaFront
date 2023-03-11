import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdminProductUpdate} from "./model/adminProductUpdate";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminProductUpdateService {

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<AdminProductUpdate> {
    return this.http.get<AdminProductUpdate>("/api/admin/products/" + id);
  }

  saveProduct(id: string, value: AdminProductUpdate) {
    return this.http.put<AdminProductUpdate>('/api/admin/products/' + id, value);
  }
}
