import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset, CoreChartOptions,registerables } from 'chart.js';
import Chart from 'chart.js/auto';
import ChartZoomPlugin from 'chartjs-plugin-zoom';
import { UserdataService } from '../services/userdata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {
  google:any;
  @ViewChild('lineChartCanvas') lineChartCanvas!: ElementRef;

  private lineChart!: Chart;
  public lineChartData: ChartDataset[] = [];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
 
  
  
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [ChartZoomPlugin];

  constructor(private http: HttpClient, private userService:UserdataService) { }
  searchStocks: any
  price:any
  // searchTerm: string = '';


  generateGraph() {
    const currentDate = new Date();
    const currentTimestamp = Math.floor(currentDate.getTime() / 1000);
    const oneYearAgoTimestamp = Math.floor(currentDate.setFullYear(currentDate.getFullYear() - 1) / 1000);
  
    const url = `https://finnhub.io/api/v1/stock/candle?symbol=GOOGL&resolution=D&from=${oneYearAgoTimestamp}&to=${currentTimestamp}&token=cc676uaad3i9rj8tb1s0`;
  
    this.http.get<any>(url).subscribe(data => {
      const chartData = data.c;
      console.log(data);
      const chartLabels = data.t.map((timestamp: number) => this.formatTimestamp(timestamp));
      this.lineChartData = [{ data: chartData, label: `GOOGLE Stock Price` }];
      this.lineChartLabels = chartLabels;
  
      this.createChart();
    });
  }
  

  
  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  
  createChart() {
    const canvas = this.lineChartCanvas.nativeElement;
    const context = canvas.getContext('2d');

    canvas.width = 100; // Set the width to 800 pixels
    canvas.height = 80;

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(context, {
      type: this.lineChartType,
      data: {
        labels: this.lineChartLabels,
        datasets: this.lineChartData,
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'x', // Enable zooming only for the x-axis
            },
            pan: {
              enabled: true,
              mode: 'x', // Enable panning only for the x-axis
            },
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date',
            },
            // Add other x-axis options here
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Price',
            },
            // Add other y-axis options here
          },
        },
        // Add other chart options here
      },
      plugins: [ChartZoomPlugin],
    });
  
  }



  ngOnInit() {
    this.userService.google().subscribe((data)=>{
     
      
      this.google=data;
    })

    this.generateGraph();
  }


}
