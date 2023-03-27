import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DefaultModule} from "./layouts/default/default.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FullpageModule} from "./layouts/fullpage/fullpage.module";
import {LoginComponent} from './modules/login/login.component';
import {FullpageadminComponent} from './layouts/fullpageadmin/fullpageadmin.component';
import {AdminComponent} from './modules/admin/admin.component';
import {FullpageadminModule} from "./layouts/fullpageadmin/fullpageadmin.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AdminProductComponent} from './modules/admin/admin-product/admin-product.component';
import { AdminProductUpdateComponent } from './modules/admin/admin-product-update/admin-product-update.component';
import { AdminProductAddComponent } from './modules/admin/admin-product-add/admin-product-add.component';
import { AdminMessageComponent } from './modules/admin/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from './modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';
import { ImageUploaderComponent } from './modules/admin/image-uploader/image-uploader.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DefaultModule,
    RouterOutlet,
    RouterModule,
    AppRoutingModule,
    FullpageModule,
    FullpageadminModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

