import { Observable, of } from 'rxjs';
import { StockService } from './stock.service';
import { StockModel } from './interfaces/stock.interface';
import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { FinnhubService } from './finnhub/finnhub.service';
import { HttpModule } from '@nestjs/axios';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule], // Add the HttpModule to the imports
      providers: [
        StockService,
        {
          provide: getModelToken('Stock'),
          useValue: {
            create: jest.fn(),
          },
        },
        // Add the FinnhubService provider here
        FinnhubService,
      ],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should get stock movers', (done) => {
    const mockStocks: StockModel[] = [
      {
        id: 1, name: 'Apple Inc.', price: 150, symbol: 'AAPL', volume: 10000,
        create: function (stock: { id: string; name: string; symbol: string; price: number; volume: number; }): Observable<{ symbol: string; price: number; volume: number; }> {
          throw new Error('Function not implemented.');
        }
      },
      {
        id: 2, name: 'Alphabet Inc.', price: 2800, symbol: 'GOOGL', volume: 5000,
        create: function (stock: { id: string; name: string; symbol: string; price: number; volume: number; }): Observable<{ symbol: string; price: number; volume: number; }> {
          throw new Error('Function not implemented.');
        }
      },
      {
        id: 3, name: 'Amazon.com Inc.', price: 3400, symbol: 'AMZN', volume: 3000,
        create: function (stock: { id: string; name: string; symbol: string; price: number; volume: number; }): Observable<{ symbol: string; price: number; volume: number; }> {
          throw new Error('Function not implemented.');
        }
      }
    ];
  });
});