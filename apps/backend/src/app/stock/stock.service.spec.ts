import { Test, TestingModule } from '@nestjs/testing';
import { StockService } from './stock.service';
import { FinnhubModule } from './finnhub/finnhub.module'; // Import FinnhubModule
import { StockModule } from './stock.module'; // Import the module providing StockModel
import { HttpModule } from '@nestjs/axios';
import { getModelToken } from '@nestjs/mongoose';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [StockModule, FinnhubModule, HttpModule], // Import FinnhubModule
      providers: [
        StockService,
        {
          provide: getModelToken('Stock'),
          useValue: {}, // Mock implementation of StockModel if needed
        },
      ],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});