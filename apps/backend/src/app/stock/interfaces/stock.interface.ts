export interface StockModel {
  mockStocks: Array<{ symbol: string; price: number; volume: number }>;
  mockCryptos: Array<{ symbol: string; price: number; volume: number }>;
}