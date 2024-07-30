import { Test, TestingModule } from '@nestjs/testing';
import { FinnhubService } from './finnhub.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { AxiosResponse, AxiosRequestHeaders } from 'axios';

describe('FinnhubService', () => {
  let service: FinnhubService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FinnhubService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FinnhubService>(FinnhubService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should get stock data', (done) => {
    const mockResponse: AxiosResponse = {
      data: { symbol: 'AAPL', name: 'Apple Inc.' },
      status: 200,
      statusText: 'OK',
      headers: {} as AxiosRequestHeaders,
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: {} as AxiosRequestHeaders,
      },
    };

    (httpService.get as jest.Mock).mockReturnValue(of(mockResponse));

    const symbol = 'AAPL';
    service.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      const expectedUrl = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + token;

      expect(httpService.get(expectedUrl));
      expect(result).toEqual(mockResponse.data);
      console.log(result);
      done();
    });
  });
});
