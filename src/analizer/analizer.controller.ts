import { Controller } from '@nestjs/common';
import { AnalizerService } from './analizer.service';

@Controller('analizer')
export class AnalizerController {
  constructor(private readonly analizerService: AnalizerService) {}
}
