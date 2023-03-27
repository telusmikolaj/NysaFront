import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ImageUploaderComponent} from "../image-uploader/image-uploader.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProductService} from "../../product/product.service";
import {AdminProductAddService} from "../admin-product-add/admin-product-add.service";

@Component({
  selector: 'app-admin-product-form',
  template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
          <mat-label>Nazwa</mat-label>
          <input matInput placeholder="Podaj nazwę produktu" class="nameInput" formControlName="name">
          <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
            <div *ngIf = "name?.errors?.['required']">
                Nazwa jest wymagana
            </div>
            <div *ngIf = "name?.errors?.['minlength']">
              Nazwa musi mieć przynajmniej 4 znaki
            </div>
          </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Opis</mat-label>
          <textarea matInput rows="10" placeholder="Podaj opis produktu" formControlName="description"></textarea>
          <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
            <div *ngIf = "description?.errors?.['required']">
              Opis jest wymagany
            </div>
            <div *ngIf = "description?.errors?.['minlength']">
              Opis musi mieć przynajmniej 4 znaki
            </div>
          </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Kategoria</mat-label>
          <input matInput placeholder="Podaj kategorię produktu" formControlName="category" class="errorMessages">
          <div *ngIf="category?.invalid && (category?.dirty || category?.touched)">
            <div *ngIf = "category?.errors?.['required']">
              Kategoria jest wymagana
            </div>
            <div *ngIf = "category?.errors?.['minlength']">
              Kategoria musi mieć przynajmniej 4 znaki
            </div>
          </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Cena</mat-label>
          <input matInput placeholder="Podaj cenę produktu" formControlName="price" class="errorMessages">
          <div *ngIf="price?.invalid && (price?.dirty || price?.touched)">
            <div *ngIf = "price?.errors?.['required']">
              Cena jest wymagana
            </div>
            <div *ngIf = "price?.errors?.['min']">
              Cena musi być conajmniej 0
            </div>
          </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Waluta</mat-label>
          <input matInput placeholder="Podaj walutę produktu" formControlName="currency" class="errorMessages">
          <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)">
            <div *ngIf = "currency?.errors?.['required']">
              Waluta jest wymagana
            </div>
          </div>
        </mat-form-field>
      <div fxLayout="column" class="image-uploader-container">
        <app-image-uploader></app-image-uploader>
      </div>
      <div class="card-container">

      <mat-card class="average-price-card">
        <mat-card-header>
          <mat-card-title>
            W nysa.it możesz sprawdzić średnią cenę swojego produktu na innych portalach aukcyjnych i na podstawie tego podjąć decyzję o cenie
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="average-price-section">
            <button mat-raised-button color="accent" [disabled]="!name?.valid" (click)="getAveragePrice()">Sprawdź średnią cenę</button>
            <mat-progress-spinner *ngIf="isLoading" [diameter]="30" mode="indeterminate"></mat-progress-spinner>
          </div>
          <div *ngIf="averagePrice" class="average-price-result">
            Średnia cena: {{ averagePrice }}
          </div>
        </mat-card-content>
      </mat-card>
      </div>
      <div fxLayoutAlign="end">
        <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Zapisz</button>
        </div>
    </div>`,
  styles: [`

    .errorMessages {
      color: red;
    }
    .card-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .average-price-card {
      width: 50%;
      margin: 24px 0;
      background-color: #e0e0e0; /* Replace with your desired background color */
      color: #333; /* Replace with your desired text color */
    }
    .average-price-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 24px 0;
    }
    .average-price-result {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }


  `]
})
export class AdminProductFormComponent implements OnInit {

  isLoading = false;
  averagePrice: string | null = null;

  @ViewChild(ImageUploaderComponent) imageUploader!: ImageUploaderComponent;
  @Input() parentForm!: FormGroup;

  constructor(private snackBar: MatSnackBar, private productService: AdminProductAddService) {
  }
  ngOnInit(): void {
  }

  get name() {
    return this.parentForm.get("name");
  }
  get price() {
    return this.parentForm.get("price");
  }
  get currency() {
    return this.parentForm.get("currency");
  }
  get category() {
    return this.parentForm.get("category");
  }
  get description() {
    return this.parentForm.get("description");
  }

  getFiles(): File[] {
    return this.imageUploader.getFiles();
  }

  getAveragePrice(): void {
    if (this.name?.valid) {
      const productName = this.name.value;

      // Show the progress spinner
      this.isLoading = true;

      // Send the request to the backend using the ProductService
      this.productService.getAveragePrice(productName).subscribe(
        (response: any) => {
          // Handle the success response
          this.isLoading = false;
          this.averagePrice = response;
        },
        (error) => {
          // Handle the error response
          this.isLoading = false;
          this.snackBar.open('Error fetching average price', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      );
    }
  }
}
