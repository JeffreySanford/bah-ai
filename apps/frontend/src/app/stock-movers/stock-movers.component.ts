import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-movers',
  templateUrl: './stock-movers.component.html',
  styleUrls: ['./stock-movers.component.scss']
})
export class StockMoversComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/stocks/movers').subscribe((data: any) => {
      debugger
      this.createChart(data);
    });
  }

  createChart(data: any[]): void {
    // Use D3 to create charts
    d3.select('svg')  // Select the SVG element
      .selectAll('rect')  // Select all rectangles
      .data(data)  // Bind data to the rectangles
      .enter()  // Enter the data
      .append('rect')  // Append a rectangle for each data point
      .attr('x', (d, i) => i * 50)  // Set the x position of the rectangle
      .attr('y', (d: any) => 100 - d.change)  // Set the y position of the rectangle
      .attr('width', 40)  // Set the width of the rectangle
      .attr('height', (d: any) => d.change)  // Set the height of the rectangle
      .attr('fill', (d: any) => d.change > 0 ? 'green' : 'red');  // Set the color of the rectangle based on the change value in the data object
  }
}