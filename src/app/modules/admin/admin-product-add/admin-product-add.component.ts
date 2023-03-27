import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminProductAddService} from "./admin-product-add.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminMessageService} from "../admin-message.service";
import {ImageUploaderComponent} from "../image-uploader/image-uploader.component";
import {AdminProductFormComponent} from "../admin-product-form/admin-product-form.component";

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit{

  productForm!: FormGroup;
  @ViewChild(AdminProductFormComponent) formComponent!: AdminProductFormComponent


  constructor(private formBuilder: FormBuilder,
  private adminProductAddService: AdminProductAddService,
  private router: Router,
  private snackBar: MatSnackBar,
              private adminMessageService: AdminMessageService) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description:['', [Validators.required, Validators.minLength(4)]],
      category:['', [Validators.required, Validators.minLength(4)]],
      price:['', [Validators.required, Validators.min(0)]],
      currency:['PLN', [Validators.required]],
    });
  }

  submit() {
    this.adminProductAddService.saveNewProduct(this.productForm.value, this.formComponent.getFiles())
      .subscribe({
        next: product => {
          this.router.navigate(['/admin/products/update', product.id])
            .then(() => this.snackBar.open('Produkt został dodany.', '', { duration: 3000 }))
        },
        error: err => this.adminMessageService.addSpringErrors(err.error)
      });
}


}
