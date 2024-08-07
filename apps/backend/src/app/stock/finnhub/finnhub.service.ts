import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FinnhubService {
  private readonly apiKey = 'cps6s5hr01qkode1001gcps6s5hr01qkode10020';
  private readonly baseUrl = 'https://finnhub.io/api/v1';

  constructor(private readonly httpService: HttpService) {}

  getStockData(stock: string): Observable<any> {
    const url = `${this.baseUrl}/quote?symbol=${stock}&token=${this.apiKey}`;
    console.log(url);
    return this.httpService.get(url).pipe(map(response => response.data));
  }

  getCryptoData(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/crypto/candle?symbol=${symbol}&resolution=D&token=${this.apiKey}`;
    return this.httpService.get(url).pipe(map(response => response.data));
  }
}
