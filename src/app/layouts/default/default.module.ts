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



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatCardModule,
    MaterialModule,
    MatPaginatorModule
  ]
})
export class DefaultModule { }
