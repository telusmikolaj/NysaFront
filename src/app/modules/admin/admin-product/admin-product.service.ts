import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Page} from "../../../shared/model/Page";
import {HttpClient} from "@angular/common/http";
import {AdminProduct} from "./AdminProduct";

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http:HttpClient) { }

  getProducts(page: number, size:number): Observable<Page<AdminProduct>> {
    return this.http.get<Page<AdminProduct>>(`api/admin/products?page=${page}&size=${size}`);
  }
}
