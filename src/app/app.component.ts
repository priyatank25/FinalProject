import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { PortfolioService } from './services/portfolio.service';
import { portfolio } from './models/portfolio';
const API_URL = 'https://finnhub.io/api/v1/quote';
const API_TOKEN = 'cc676uaad3i9rj8tb1s0';
interface StockQuote {
  symbol: string;
  currentPrice: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-watcher';
  // myForm!:FormGroup
  stockQuotes: StockQuote[] = [];
  symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NVDA', 'PCGU', 'META', 'TSM', 'UNH', 'LLY',
                          'V', 'JNJ', 'XOM', 'WMT', 'JPM', 'MA', 'PG', 'NVO', 'AVGO', 'ORCL', 'HD',
                        'BHP', 'CVX', 'MRK', 'ASML', 'KO', 'PEP', 'COST', 'ABBV', 'BABA', 'BAC', 'ADBE']; // Add your desired stock symbols here
  constructor(private http: HttpClient, private portfolioservice:PortfolioService) {}
  ngOnInit() {
    this.fetchStockQuotes();
    // this.myForm = new FormGroup({
    //   userName: new FormControl(''),
    //   portfolioName: new FormControl('')
    // });
  }
  
  fetchStockQuotes() {
    this.symbols.forEach((symbol) => {
      this.http
        .get(`${API_URL}?symbol=${symbol}&token=${API_TOKEN}`)
        .subscribe((response: any) => {
          const stockQuote: StockQuote = {
            symbol: symbol,
            currentPrice: response.c
          };
          this.stockQuotes.push(stockQuote);
        });
    });
  }
  // addPortfolio(obj:portfolio){
  //   // this.obj.userName=this.username
  //   // this.obj.portfolioName=this.portfolioname
  //   this.portfolioservice.addPortfolio(obj).subscribe(res=>{
  //     console.log(res);
      
  //   })
  // }

  // addPortfolio(obj:portfolio){
  //   // this.obj.userName=this.username
  //   // this.obj.portfolioName=this.portfolioname
  //   this.portfolioservice.addPortfolio(obj).subscribe(res=>{
  //     console.log(res);
      
  //   })
  // }
  // addPortfolio() {
  //   console.log('Username:', this.username);
  //   console.log('Portfolio Name:', this.portfolioName);
    // You can perform further operations with the values, such as sending them to a server or updating your data model.
  }

