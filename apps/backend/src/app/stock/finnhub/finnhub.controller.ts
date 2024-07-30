import { Controller, Get, Param } from '@nestjs/common';
import { FinnhubService } from './finnhub.service';
import { Observable } from 'rxjs';

@Controller('finnhub')
export class FinnhubController {
    constructor(private readonly finnhubService: FinnhubService) { }

    @Get('stock/:symbol')
    getStockData(@Param('symbol') symbol: string): Observable<any> {

        return this.finnhubService.getStockData(symbol)
    }
}
