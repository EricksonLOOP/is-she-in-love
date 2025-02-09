import { Module } from '@nestjs/common';
import { AnalizerService } from './analizer.service';
import { AnalizerController } from './analizer.controller';

@Module({
  controllers: [AnalizerController],
  providers: [AnalizerService],
})
export class AnalizerModule {}
