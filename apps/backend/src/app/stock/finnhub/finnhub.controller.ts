import { Controller, Get, Param } from '@nestjs/common';
import { FinnhubService } from './finnhub.service';

@Controller('finnhub')
export class FinnhubController {
  constructor(private readonly finnhubService: FinnhubService) {}

  @Get('stock/:symbol')
  getStockData(@Param('symbol') symbol: string): void {
	this.finnhubService.getStockData(symbol).subscribe(data => {
	  console.log(data);
	});
  }
}
