import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, fromCurrency: string, toCurrency: string): number {
    // Define exchange rates
    const exchangeRates: { [key: string]: number } = {
      'INR':73,
      'USD': 1,
      'EUR': 0.84,
      'GBP': 0.72
      // Add more currencies as needed
    };

    // Calculate conversion
    const rate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
    const convertedValue = value * rate;

    // Return converted value
    return convertedValue;
  }

}
