import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from './stock.schema';
import { StockService } from './stock.service';
import { FinnhubModule } from './finnhub/finnhub.module';
import { FinnhubService } from './finnhub/finnhub.service';
import { HttpService } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Stock', schema: StockSchema }]),
    FinnhubModule,
    HttpService
  ],
  providers: [StockService, FinnhubService],
  exports: [StockService],
})
export class StockModule {}
