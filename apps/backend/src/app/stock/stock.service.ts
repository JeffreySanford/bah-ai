import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { StockModel } from './interfaces/stock.interface';
import { FinnhubService } from './finnhub/finnhub.service';

@Injectable()
export class StockService {
  constructor(
    @InjectModel('Stock') private readonly stockModel: Model<StockModel>,
    private readonly finnhubService: FinnhubService
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_5AM)
  handleCron() {
    // Fetch stocks and crypto data
    this.finnhubService.getStockData('AAPL').subscribe(data => {
      console.log('Stock Data:', data);
      // Save data to database
    });

    this.finnhubService.getCryptoData('BINANCE:BTCUSDT').subscribe(data => {
      console.log('Crypto Data:', data);
      // Save data to database
    });
  }

  findAll(): Observable<StockModel[]> {
    return from(this.stockModel.find().exec());
  }

  findMovers(): Observable<StockModel[]> {
    // Implement logic to find movers
    return from(this.stockModel.find().sort({ change: -1 }).limit(10).exec());
  }
}
