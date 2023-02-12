import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DefaultModule} from "./layouts/default/default.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FullpageModule} from "./layouts/fullpage/fullpage.module";
import { LoginComponent } from './modules/login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DefaultModule,
    RouterOutlet,
    RouterModule,
    AppRoutingModule,
    FullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

