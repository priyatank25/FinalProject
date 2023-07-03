import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import {HttpClientModule} from '@angular/common/http';
import { AppleComponent } from './apple/apple.component';
import { GoogleComponent } from './google/google.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { TslaComponent } from './tsla/tsla.component';
import { BysearchComponent } from './bysearch/bysearch.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowportfolioComponent } from './showportfolio/showportfolio.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    AppleComponent,
    GoogleComponent,
    MicrosoftComponent,
    TslaComponent,
    BysearchComponent,
    ShowportfolioComponent,
    ViewstocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
