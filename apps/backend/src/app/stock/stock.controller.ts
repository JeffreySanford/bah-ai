import { Controller, Get } from '@nestjs/common';
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

  @Get('movers')
  findMovers(): Observable<StockModel[]> {
    return this.stockService.findMovers();
  }
}
