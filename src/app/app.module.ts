import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrencyConverterPipe } from './pipes/converter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    NavbarComponent,
    CurrencyConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    CurrencyConverterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
