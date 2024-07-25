import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockModel} from './interfaces/stock.interface';

@Injectable()
export class StockService {
  constructor(@InjectModel('Stock') private readonly stockModel: Model<StockModel>) {}

  async findAll(): Promise<StockModel[]> {
    return await this.stockModel.find().exec();
  }

  async findMovers(): Promise<StockModel[]> {
    // Implement logic to find movers
    return await this.stockModel.find().sort({ change: -1 }).limit(10).exec();
  }
}
