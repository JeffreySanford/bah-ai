import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { StockService } from './stock/stock.service';
import { StockSchema } from './stock/stock.schema';
import { FinnhubService } from './stock/finnhub/finnhub.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: 'Stock', schema: StockSchema }]),
    ScheduleModule.forRoot(),
    HttpModule
  ],
  providers: [StockService, FinnhubService],
})
export class AppModule {}
