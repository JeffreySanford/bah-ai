import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock } from './interfaces/stock.interface';

@Injectable()
export class StockService {
  constructor(@InjectModel('Stock') private readonly stockModel: Model<Stock>) {}

  async findAll(): Promise<Stock[]> {
    return await this.stockModel.find().exec();
  }

  async findMovers(): Promise<Stock[]> {
    // Implement logic to find movers
    return await this.stockModel.find().sort({ change: -1 }).limit(10).exec();
  }
}
