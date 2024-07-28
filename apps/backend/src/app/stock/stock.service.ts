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
  ) {
    this.stockModel.create({
      mockStocks: [
        { symbol: 'AAPL', price: 150, volume: 10000 },
        { symbol: 'GOOGL', price: 2800, volume: 5000 },
        { symbol: 'AMZN', price: 3400, volume: 3000 },
      ],
      mockCryptos: [
        { symbol: 'BTC', price: 45000, volume: 2000 },
        { symbol: 'ETH', price: 3000, volume: 10000 },
        { symbol: 'DOGE', price: 0.25, volume: 500000 },
      ],
    });
  }

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

  find(symbol: string): Observable<StockModel | null> {
    return from(this.stockModel.findOne().where('symbol').equals(symbol).exec()) as Observable<StockModel | null>;
  }

  findAll(): Observable<StockModel[]> {
    return from(this.stockModel.find().exec());
  }

  findMovers(): Observable<StockModel[]> {
    // Implement logic to find movers
    return from(this.stockModel.find().sort({ change: -1 }).limit(10).exec());
  }
}
