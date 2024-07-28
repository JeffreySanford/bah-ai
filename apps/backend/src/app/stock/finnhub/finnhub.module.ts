import { Module } from '@nestjs/common';
import { FinnhubController } from './finnhub.controller';
import { FinnhubService } from './finnhub.service';

@Module({
  imports: [],
  controllers: [FinnhubController],
  providers: [FinnhubService],
  exports: [FinnhubService],
})
export class FinnhubModule {}
