import { Test, TestingModule } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { FinnhubService } from './finnhub/finnhub.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('StockController', () => {
  let controller: StockController;
  let stockService: StockService;

  beforeEach(async () => {
    const mockStockModel = {
      create: jest.fn().mockImplementation(() => of({
        mockStocks: [
          { symbol: 'AAPL', price: 150, volume: 10000 },
          { symbol: 'GOOGL', price: 2800, volume: 5000 },
        ],
      })),
      find: jest.fn().mockImplementation(() => ({
        exec: jest.fn().mockResolvedValue([
          { symbol: 'AAPL', price: 150, volume: 10000 },
          { symbol: 'GOOGL', price: 2800, volume: 5000 },
        ]),
      })),
    };

    const mockHttpService = {
      get: jest.fn().mockImplementation(() => of({
        data: [
          { id: 1, name: 'FinnHub Stock A', price: 100 },
          { id: 2, name: 'FinnHub Stock B', price: 200 },
        ],
      })),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [
        StockService,
        {
          provide: 'StockModel',
          useValue: mockStockModel
        },
        FinnhubService,
        {
          provide: HttpService,
          useValue: mockHttpService
        },
      ],
    }).compile();

    controller = module.get<StockController>(StockController);
    stockService = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});