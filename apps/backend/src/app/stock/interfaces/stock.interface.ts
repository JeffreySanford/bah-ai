import { Observable } from 'rxjs';

export interface StockModel {

  id: number,
  name: string;
  symbol: string;
  price: number;
  volume: number;

//   findOne(symbol: string): Observable<StockModel>;
//   findAll(): Observable<StockModel[]>;
//   create(stock: { id: string, name: string, symbol: string; price: number; volume: number }): Observable<{ symbol: string; price: number; volume: number }>;
// }
}