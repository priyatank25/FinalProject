import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService implements OnInit{
  baseURL="https://localhost:7200/"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  getStocks(id:any):Observable<Array<stock>>{
    return this.http.get<Array<stock>>(this.baseURL+`api/Stock/${id}`)
  }

  addStock(obj:stock):Observable<stock>{
    return this.http.post<stock>(this.baseURL+"api/Stock",obj)
  }

  deleteStock(stockId: number, portfolioId: number):Observable<stock>{
    return this.http.delete<stock>(`${this.baseURL}api/Stock?stockId=${stockId}&portfolioId=${portfolioId}`)
  }

}
