import { Test, TestingModule } from '@nestjs/testing';
import { AnalizerController } from './analizer.controller';
import { AnalizerService } from './analizer.service';

describe('AnalizerController', () => {
  let controller: AnalizerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalizerController],
      providers: [AnalizerService],
    }).compile();

    controller = module.get<AnalizerController>(AnalizerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
