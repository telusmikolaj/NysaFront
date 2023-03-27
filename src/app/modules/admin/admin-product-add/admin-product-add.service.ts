import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdminProductUpdate} from "../admin-product-update/model/adminProductUpdate";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminProductAddService {

  constructor(private http: HttpClient) {


  }

  saveNewProduct(product: AdminProductUpdate, files: File[]) {
    const formData = new FormData();

    formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));

    files.forEach((image, index) => {
      formData.append(`files`, image);
    });

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post<AdminProductUpdate>('/api/admin/products', formData, { headers });
  }

  getAveragePrice(productName: string): Observable<any> {
    return this.http.get('/api/analitics/' + productName);
  }
}
