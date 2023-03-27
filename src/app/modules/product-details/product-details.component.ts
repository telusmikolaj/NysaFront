import {Component, OnInit} from '@angular/core';
import {ProductDetails} from "./model/ProductDetails";
import {ProductDetailsService} from "./product-details.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  product!: ProductDetails;

  constructor(private productDetailsService: ProductDetailsService,
              private router: ActivatedRoute) {

  }

  getProductDetails() {
    let id = this.router.snapshot.params['id'];
    this.productDetailsService.getProductDetails(id)
      .subscribe(product => this.product = product);
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

}
