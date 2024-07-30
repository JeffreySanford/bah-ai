import { Module } from '@nestjs/common';
import { FinnhubController } from './finnhub.controller';
import { FinnhubService } from './finnhub.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FinnhubController],
  providers: [FinnhubService],
  exports: [FinnhubService],
})
export class FinnhubModule {}
