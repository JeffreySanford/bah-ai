import { Test, TestingModule } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

describe('StockController', () => {
  let controller: StockController;
  let service: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [
        {
          provide: StockService,
          useValue: {
            // Mock implementation of StockService methods if needed
          },
        },
      ],
    }).compile();

    controller = module.get<StockController>(StockController);
    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
