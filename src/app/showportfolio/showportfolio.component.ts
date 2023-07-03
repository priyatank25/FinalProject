import { Component, OnInit } from '@angular/core';
import { portfolio } from '../models/portfolio';
import { PortfolioService } from '../services/portfolio.service';
import { FormControl, FormGroup, FormsModule, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-showportfolio',
  templateUrl: './showportfolio.component.html',
  styleUrls: ['./showportfolio.component.css']
})
export class ShowportfolioComponent implements OnInit{
  myForm!:FormGroup
  allportfolio:portfolio[]=[];
  portfolios:Array<portfolio>=[]
    constructor(private portfolioservice:PortfolioService, private formBuilder: FormBuilder){

    }
    ngOnInit(): void {
      this.getPortfolios();
      this.myForm = this.formBuilder.group({
        userName: ['', Validators.required], // Add required validation
  portfolioName: ['', Validators.required]
      });
    }
    addPortfolio(obj:portfolio){
      // this.obj.userName=this.username
      // this.obj.portfolioName=this.portfolioname
      this.portfolioservice.addPortfolio(obj).subscribe(res=>{
        console.log(res);
        this.myForm.reset();
        this.getPortfolios()
        
      })
    }

    getPortfolios(){
      this.portfolioservice.getPortfolio().subscribe(res=>{
        this.portfolios=res
      })
    }

    deletePortfolio(id: number){
      this.portfolioservice.deletePortfolio(id).subscribe(res=>{
        // next:(res)=>{
        // this.allportfolio=this.allportfolio.filter(_=>_.portfolioId!=id)
        this.getPortfolios()
      })
      }
    }
    
     
    

