import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminProductUpdateService} from "./admin-product-update.service";
import {AdminProductUpdate} from "./model/adminProductUpdate";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminProductComponent} from "../admin-product/admin-product.component";
import {AdminMessageService} from "../admin-message.service";

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.css']
})
export class AdminProductUpdateComponent implements OnInit {

  product!: AdminProductUpdate;
  productForm!: FormGroup;
  durationInSeconds = 5;

  constructor(private router: ActivatedRoute,
              private adminProductUpdateService: AdminProductUpdateService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar,
              private adminMessageService: AdminMessageService) {

  }


  ngOnInit(): void {
    this.getProduct();
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description:['', [Validators.required, Validators.minLength(4)]],
      category:['', [Validators.required, Validators.minLength(4)]],
      price:['', [Validators.required, Validators.min(0)]],
      currency:['PLN', [Validators.required]],
    })
  }


  getProduct() {
    let id = String(this.router.snapshot.params['id']);
    this.adminProductUpdateService.getProduct(id)
      .subscribe(product => this.productForm.setValue({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        currency: product.currency
      }));
  }

  submit() {
    let id = String(this.router.snapshot.params['id']);

    this.adminProductUpdateService.saveProduct(id, {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value,
      price: this.productForm.get('price')?.value,
      currency: this.productForm.get('currency')?.value
    } as AdminProductUpdate)
      .subscribe({
        next: product => {
          this.mapFormValues(product)
          this.snackBar.open("Produkt został zapisany", '', {duration: 3000});
        },
        error: err => this.adminMessageService.addSpringErrors(err.error)
      });
  }

  private mapFormValues(product: AdminProductUpdate) {
    this.productForm.setValue({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      currency: product.currency
    });
  }
}
