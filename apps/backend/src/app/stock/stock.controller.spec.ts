import { Test, TestingModule } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { FinnhubService } from './finnhub/finnhub.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('StockController', () => {
  let controller: StockController;
  let finnhubService: FinnhubService;
  let httpService: HttpService;

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
          { symbol: 'AAPL', price: 150, volume: 10000 },
          { symbol: 'GOOGL', price: 2800, volume: 5000 },
        ],
      })),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [
        {
          provide: FinnhubService,
          useValue: mockStockModel,
        },
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    controller = module.get<StockController>(StockController);
    finnhubService = module.get<FinnhubService>(FinnhubService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('finnhubService should be defined', () => {
    expect(finnhubService).toBeDefined();
  });

  it('httpService should be defined', () => {
    expect(httpService).toBeDefined();
  });
});