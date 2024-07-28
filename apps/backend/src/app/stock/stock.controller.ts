import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StockService } from './stock.service';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(): Observable<any> {
    return this.stockService.findAll();
  }

  @Get('movers')
  findMovers(): Observable<any> {
    return this.stockService.findMovers();
  }
}
