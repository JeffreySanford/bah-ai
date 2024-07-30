import { Controller, Get, Put } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockModel } from './interfaces/stock.interface';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(): StockModel[] {
    return this.stockService.findAll();
  }

  @Put()
  createStocks(stocks:string[]): boolean {
    return this.stockService.createStocks(stocks);
  }
}
