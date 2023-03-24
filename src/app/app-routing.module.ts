import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

const routes: Routes = [
  {
    path:'',redirectTo:'converter/home',pathMatch:'full'
  },
  {
    path:'converter/home',component:CurrencyConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
