import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { AppleComponent } from './apple/apple.component';
import { GoogleComponent } from './google/google.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { TslaComponent } from './tsla/tsla.component';
import { ShowportfolioComponent } from './showportfolio/showportfolio.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponentComponent
  },
  {
    path:'apple',
    component:AppleComponent
  },
  {
    path:'google',
    component:GoogleComponent
  },
  {
    path:'msft',
    component:MicrosoftComponent
  },
  {
    path:'tsla',
    component:TslaComponent
  },
  {
    path:'showportfolio',
    component:ShowportfolioComponent
  },
  {
    path:'viewstocks/:id',
    component:ViewstocksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
