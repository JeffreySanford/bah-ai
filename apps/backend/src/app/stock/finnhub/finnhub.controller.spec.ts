import { Test, TestingModule } from '@nestjs/testing';
import { FinnhubController } from './finnhub.controller';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { FinnhubService } from './finnhub.service'; // Import FinnhubService if used in the controller

describe('FinnhubController', () => {
  let controller: FinnhubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule], // Add HttpModule to imports
      controllers: [FinnhubController],
      providers: [FinnhubService], // Add FinnhubService to providers if used in the controller
    }).compile();

    controller = module.get<FinnhubController>(FinnhubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
