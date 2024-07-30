import { StockService } from './stock.service';
import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { FinnhubService } from './finnhub/finnhub.service';
import { HttpModule } from '@nestjs/axios';

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        StockService,
        {
          provide: getModelToken('Stock'),
          useValue: {
            create: jest.fn(),
          },
        },
        FinnhubService
      ],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});