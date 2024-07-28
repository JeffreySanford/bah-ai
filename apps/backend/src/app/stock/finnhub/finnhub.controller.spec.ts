import { Test, TestingModule } from '@nestjs/testing';
import { FinnhubController } from './finnhub.controller';

describe('FinnhubController', () => {
  let controller: FinnhubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinnhubController],
    }).compile();

    controller = module.get<FinnhubController>(FinnhubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
