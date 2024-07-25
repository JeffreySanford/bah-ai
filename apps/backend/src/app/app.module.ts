import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { StockModule } from './stock/stock.module';


@Module({
  imports: [StockModule, MongooseModule.forRoot('mongodb://localhost/stock'), StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
