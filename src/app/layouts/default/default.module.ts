import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from "./default.component";
import {HomeComponent} from "../../modules/home/home.component";
import {ProductComponent} from "../../modules/product/product.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MaterialModule} from "../../shared/material.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProductDetailsComponent} from "../../modules/product-details/product-details.component";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatCardModule,
    MaterialModule,
    MatPaginatorModule,
    MatGridListModule
  ]
})
export class DefaultModule { }
