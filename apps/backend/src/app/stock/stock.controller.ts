import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async findAll() {
    return this.stockService.findAll();
  }

  @Get('movers')
  async findMovers() {
    return this.stockService.findMovers();
  }
}
