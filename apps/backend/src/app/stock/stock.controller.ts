import { Controller, Get, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StockService } from './stock.service';
import { StockModel } from './interfaces/stock.interface';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(): Observable<StockModel[]> {
    return this.stockService.findAll();
  }

  @Put()
  createStocks(stocks:string[]): Observable<StockModel[]> {
    return this.stockService.createStocks(stocks);
  }
  
}


