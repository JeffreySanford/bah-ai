/**
 * FILEPATH: /C:/repos/bah-ai/apps/backend/src/app/stock/finnhub/finnhub.service.spec.ts
 *
 * This file contains the unit tests for the FinnhubService class.
 */

import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpModule, HttpService } from '@nestjs/axios';
import { FinnhubService } from './finnhub.service';
import { AxiosResponse } from 'axios';
import { Test, TestingModule } from '@nestjs/testing';

describe('FinnhubService', () => {
  let finnHubService: FinnhubService;
  let httpService: HttpService;

  beforeEach(() => {
    const httpServiceMock = {
      get: jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        FinnhubService,
        { provide: HttpService, useValue: httpServiceMock }
      ]
    });

    finnHubService = TestBed.inject(FinnhubService);
    httpService = TestBed.inject(HttpService);
  });

  it('should get all stocks', (done) => {
    const mockResponse: AxiosResponse = {
      data: [{ symbol: 'AAPL', name: 'Apple Inc.' }],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: undefined
      },
    };

    (httpService.get as jest.Mock).mockReturnValue(of(mockResponse));

    const symbol = 'AAPL';
    finnHubService.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      const expectedUrl = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + token;

      // Log the actual URL being called
      console.log('Actual URL:', (httpService.get as jest.Mock).mock.calls[0][0]);

      expect(httpService.get).toHaveBeenCalledWith(expectedUrl);
      expect(result).toEqual(mockResponse.data);
      done();
    });
  });

  it('should get all cryptos', (done) => {
    const mockResponse: AxiosResponse = {
      data: [{ symbol: 'BTC', name: 'Bitcoin' }],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: undefined
      },
    };

    (httpService.get as jest.Mock).mockReturnValue(of(mockResponse));

    const symbol = 'BTC';
    finnHubService.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      expect(httpService.get).toHaveBeenCalledWith('https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=' + token);
      expect(result).toEqual(mockResponse.data);
      done();
    });
  });

  it('should get stock data', (done) => {
    const mockResponse: AxiosResponse = {
      data: { symbol: 'BAH', name: 'Booz Allen Hamilton' },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: undefined
      },
    };

    (httpService.get as jest.Mock).mockReturnValue(of(mockResponse));

    const symbol = 'BAH';
    finnHubService.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      expect(httpService.get).toHaveBeenCalledWith('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + token);
      expect(result).toEqual(mockResponse.data);
      done();
    });
  });
});

/**
 * Test suite for the FinnhubService class.
 */
describe('FinnhubService', () => {
  let finnHubService: FinnhubService;
  let httpService: HttpService;

  const mockHttpService = {
    get: jest.fn(),
  };

  /**
   * Set up the testing module before each test case.
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        FinnhubService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    finnHubService = module.get<FinnhubService>(FinnhubService);
    httpService = module.get<HttpService>(HttpService);
  });

  /**
   * Test case to check if the FinnhubService is defined.
   */
  it('should be defined', () => {
    expect(finnHubService).toBeDefined();
  });

  /**
   * Test case to get all stocks.
   */
  it('should get all stocks', (done) => {
    const mockResponse: AxiosResponse = {
      data: [{ symbol: 'AAPL', name: 'Apple Inc.' }],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: undefined
      },
    };

    mockHttpService.get.mockReturnValue(of(mockResponse));

    const symbol = 'BAH';

    finnHubService.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      expect(httpService.get).toHaveBeenCalledWith('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + token);
      expect(result).toEqual(mockResponse.data);
      done();
    });
  });

  /**
   * Test case to get all cryptos.
   */
  it('should get all cryptos', (done) => {
    const mockResponse: AxiosResponse = {
      data: [{ symbol: 'BTC', name: 'Bitcoin' }],
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: undefined
      }
    };

    mockHttpService.get.mockReturnValue(of(mockResponse));

    const symbol = 'BTC';
    finnHubService.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      expect(httpService.get).toHaveBeenCalledWith('https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=' + token);
      expect(result).toEqual(mockResponse.data);
      done();
    });
  });

  /**
   * Test case to get stock data.
   */
  it('should get stock data', (done) => {
    const mockResponse: AxiosResponse = {
      data: { symbol: 'BAH', name: 'Booz Allen Hamilton' },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        url: 'https://finnhub.io/api/v1/stock/symbol?exchange',
        params: { exchange: 'US', token: 'api_key' },
        headers: undefined
      },
    };

    mockHttpService.get.mockReturnValue(of(mockResponse));

    const symbol = 'BAH';

    finnHubService.getStockData(symbol).subscribe((result) => {
      const token = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
      expect(httpService.get).toHaveBeenCalledWith('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=' + token);
      expect(result).toEqual(mockResponse.data);
      done();
    });
  });
});
