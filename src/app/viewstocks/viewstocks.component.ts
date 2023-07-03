import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { stock } from '../models/stock';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-viewstocks',
  templateUrl: './viewstocks.component.html',
  styleUrls: ['./viewstocks.component.css']
})
export class ViewstocksComponent implements OnInit{
  mystocks!:Array<stock>
  myForm!:FormGroup
  pid:any
  allstock:stock[]=[];
  constructor(private route: ActivatedRoute,private stockservice:StockService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      stockName: ['', Validators.required],
    stockPrice: ['', [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]],
    stockQuantity: ['', [Validators.required, Validators.pattern(/^-?\d+$/)]]
    });



    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.pid=id
      console.log('ID:', id); // Replace with your desired logic
      this.stockservice.getStocks(this.pid).subscribe(res=>{
        console.log(res);
        
        this.mystocks=res;
      })
    });
  }

  addStock(obj:stock){
    // this.obj.userName=this.username
    // this.obj.portfolioName=this.portfolioname
    obj.portfolioId=this.pid
    this.stockservice.addStock(obj).subscribe(res=>{
      console.log(res);
      this.myForm.reset();
      
    })
    this.stockservice.getStocks(this.pid).subscribe(res=>{
      // console.log(res);
      
      this.mystocks=res;
    }) 
  
  }

  // deleteStock(id: number){
  //   this.stockservice.deleteStock(id).subscribe(res=>{
        
    
  //   })
  //   this.stockservice.getStocks(this.pid)
  // }

  deleteStock(stockId: number, portfolioId: number) {
    this.stockservice.deleteStock(stockId, portfolioId)
      .subscribe(res=>{

      })
      this.stockservice.getStocks(this.pid).subscribe(res=>{
        // console.log(res);
        
        this.mystocks=res;
      })   
 

}

}