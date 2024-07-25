import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from './stock.schema';
import { StockService } from './stock.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Stock', schema: StockSchema }])],
  providers: [StockService],
  exports: [StockService],
})
export class StockModule {}