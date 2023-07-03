import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stockItem } from '../models/stockItem';
import { priceQuote } from '../models/priceQuote';


@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  
  constructor(private http: HttpClient) { }
  appleapi =
    'https://finnhub.io/api/v1/quote?symbol=AAPL&token=cih9hrpr01ql04e4olq0cih9hrpr01ql04e4olqg';

  googleapi =
    'https://finnhub.io/api/v1/quote?symbol=GOOGL&token=cih9hrpr01ql04e4olq0cih9hrpr01ql04e4olqg';

  msftapi =
    'https://finnhub.io/api/v1/quote?symbol=MSFT&token=cih9hrpr01ql04e4olq0cih9hrpr01ql04e4olqg';

  tslaapi =
    'https://finnhub.io/api/v1/quote?symbol=TSLA&token=cih9hrpr01ql04e4olq0cih9hrpr01ql04e4olqg';

    url1=`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cih9hrpr01ql04e4olq0cih9hrpr01ql04e4olqg`;

  apple() {
    return this.http.get<priceQuote>(this.appleapi);
  }
  google() {
    return this.http.get<priceQuote>(this.googleapi);
  }
  msft() {
    return this.http.get<priceQuote>(this.msftapi);
  }
  tsla(){
    return this.http.get<priceQuote>(this.tslaapi);
  }
  user(){
    return this.http.get<stockItem[]>(this.url1);
  }
}
