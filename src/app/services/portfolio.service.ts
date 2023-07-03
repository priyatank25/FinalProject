import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { portfolio } from '../models/portfolio';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  baseURL="https://localhost:7012/"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  
  addPortfolio(obj:portfolio):Observable<portfolio>{
    return this.http.post<portfolio>(this.baseURL+"api/PortfolioProfile",obj)
  }

  getPortfolio():Observable<Array<portfolio>>{
    return this.http.get<Array<portfolio>>(this.baseURL+"api/PortfolioProfile/Portfolios")
  }
  
  deletePortfolio(id:number):Observable<portfolio>{
    return this.http.delete<portfolio>(this.baseURL+`api/PortfolioProfile/Portfolios/${id}`)
  }

}
