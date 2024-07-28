import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-movers',
  templateUrl: './stock-movers.component.html',
  styleUrls: ['./stock-movers.component.scss']
})
export class StockMoversComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/api/stocks/movers').subscribe((data: any) => {
      debugger
      this.createChart(data);
    });
  }

  createChart(data: Object): void {
    // Use D3 to create charts
  }
}