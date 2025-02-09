import { Test, TestingModule } from '@nestjs/testing';
import { AnalizerService } from './analizer.service';

describe('AnalizerService', () => {
  let service: AnalizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalizerService],
    }).compile();

    service = module.get<AnalizerService>(AnalizerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
