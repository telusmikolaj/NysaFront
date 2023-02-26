import {Component} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./model/product";
import {Page} from "../../shared/model/Page";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  page!: Page<Product>;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.getProductPage(0, 10);

  }

  private getProductPage(page: number, size: number) {
    this.productService.getProducts(page, size)
      .subscribe(page => this.page = page);
  }

  onPageEvent(event: PageEvent) {
    this.getProductPage(event.pageIndex, event.pageSize);

  }
}
