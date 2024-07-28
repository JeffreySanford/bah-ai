import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import * as d3 from 'd3';

@Component({
  selector: 'app-stock-movers',
  templateUrl: './stock-movers.component.html',
  styleUrls: ['./stock-movers.component.scss']
})
export class StockMoversComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['symbol', 'price', 'changes', 'changesPercentage'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/stocks/movers').subscribe((data: any) => {
      debugger
      this.dataSource.data = data;
      this.createChart(data);
    });
  }

  private createChart(data: any): void {
    const width = 450;
    const height = 450;
    const margin = 40;

    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select("#pieChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    // Continue with the D3 chart creation...
  }
}