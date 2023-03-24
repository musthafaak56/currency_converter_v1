import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
amount: any;
fromCurrency: any;
toCurrency: any;

  // constructor(private currencyPipe: CurrencyPipe) {}



}
