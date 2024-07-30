import { Test, TestingModule } from '@nestjs/testing';
import { FinnhubController } from './finnhub.controller';
import { FinnhubService } from './finnhub.service';
import { of } from 'rxjs';

describe('FinnhubController', () => {
  let controller: FinnhubController;
  let service: FinnhubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinnhubController],
      providers: [
        {
          provide: FinnhubService,
          useValue: {
            getStockData: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FinnhubController>(FinnhubController);
    service = module.get<FinnhubService>(FinnhubService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get stock data', (done) => {
    const mockResponse = {
      symbol: 'AAPL',
      name: 'Apple Inc.',
    };

    jest.spyOn(service, 'getStockData').mockReturnValue(of(mockResponse));

    const symbol = 'AAPL';
    controller.getStockData(symbol).subscribe({
      next: (result) => {
        expect(result).toEqual(mockResponse);
        done();
      },
      error: (err) => {
        done.fail(err);
      }
    });
  });
});
