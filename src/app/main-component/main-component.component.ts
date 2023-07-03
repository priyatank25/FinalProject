import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { stockItem } from '../models/stockItem';
import { priceQuote } from '../models/priceQuote';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { newsItem } from '../models/newsItem';



@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit{
  google!:priceQuote;
  apple!:priceQuote;
  msft!:priceQuote;
  tsla!:priceQuote;
  stocks!:priceQuote;
  item:stockItem[]=[];
  news: newsItem[] = [];
  constructor(private userService:UserdataService, private router: Router,private http:HttpClient){

    
  }

  fetchNews(): void {
    const apiUrl = 'https://finnhub.io/api/v1/news?category=general&token=cih9hrpr01ql04e4olq0cih9hrpr01ql04e4olqg';
    this.http.get(apiUrl).subscribe((data: any) => {
      const marketWatchNews = data.filter((item: newsItem) => item.source === 'MarketWatch').slice(0, 9);
      this.news = marketWatchNews;
    });
  }

  ngOnInit(): void {
    this.userService.apple().subscribe((data)=>{
      console.log(data);
      
      this.apple=data;
    })
    this.userService.google().subscribe((dt)=>{
      this.google=dt;
    })
    this.userService.msft().subscribe((ms)=>{
      this.msft=ms;
    })
    this.userService.tsla().subscribe((ts)=>{
      this.tsla=ts;
    })
    this.userService.user().subscribe((res)=>{
      this.item=res.slice(0,100);
     // this.stocks.slice(0,15)
  })

  this.fetchNews();
  }


  navigateToApplePage() {
    this.router.navigate(['/apple']);
  }
  navigateToGooglePage() {
    this.router.navigate(['/google']); 
  }
  navigateToMsftPage(){
    this.router.navigate(['/msft'])
  }
  navifateToTslaPage(){
    this.router.navigate(['/tsla'])
  }
}
