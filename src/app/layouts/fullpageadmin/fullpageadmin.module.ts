import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullpageadminComponent} from "./fullpageadmin.component";
import {AdminComponent} from "../../modules/admin/admin.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import {AdminProductComponent} from "../../modules/admin/admin-product/admin-product.component";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {AdminProductUpdateComponent} from "../../modules/admin/admin-product-update/admin-product-update.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminProductAddComponent} from "../../modules/admin/admin-product-add/admin-product-add.component";
import {AdminProductFormComponent} from "../../modules/admin/admin-product-form/admin-product-form.component";
import {AdminMessageComponent} from "../../modules/admin/admin-message/admin-message.component";
import {AdminConfirmDialogComponent} from "../../modules/admin/admin-confirm-dialog/admin-confirm-dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ImageUploaderComponent} from "../../modules/admin/image-uploader/image-uploader.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    ImageUploaderComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class FullpageadminModule { }
