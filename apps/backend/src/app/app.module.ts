import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Replace with your MongoDB connection string
    StockModule
  ],
})
export class AppModule {}
