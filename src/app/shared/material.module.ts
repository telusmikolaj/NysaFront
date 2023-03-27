import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
