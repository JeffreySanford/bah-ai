import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { StockModel } from './interfaces/stock.interface';
import { FinnhubService } from './finnhub/finnhub.service';

@Injectable()
export class StockService implements OnModuleInit {
  constructor(
    @InjectModel('Stock') private stockModel: StockModel[],
    private readonly finnhubService: FinnhubService
  ) { }

  onModuleInit() {
    this.initializeMockData();
  }

  findOne(symbol: string): StockModel | undefined {
    // return the array mapped with the symbol
    return this.stockModel.find((stock) => stock.symbol === symbol);
  }

  findAll(): StockModel[] {
    return this.stockModel;
  }

  private initializeMockData(): StockModel[] {
    const mockData = {
      mockStocks: [
        { symbol: 'AAPL', price: 150, volume: 10000 },
        { symbol: 'GOOGL', price: 2800, volume: 5000 },
        { symbol: 'AMZN', price: 3400, volume: 3000 },
      ],
      mockCryptos: [
        { symbol: 'BTC', price: 45000, volume: 2000 },
        { symbol: 'ETH', price: 3000, volume: 10000 },
        { symbol: 'DOGE', price: 0.25, volume: 500000 },
      ]
    };

    mockData.mockStocks.forEach((stock) => {
      this.stockModel.push(stock);
    }

    return this.stockModel;
  }
}
