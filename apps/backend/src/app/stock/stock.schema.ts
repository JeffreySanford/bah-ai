import { Schema } from 'mongoose';

export const StockSchema = new Schema({
  symbol: String,
  price: Number,
  change: Number,
  volume: Number,
  date: { type: Date, default: Date.now },
});
