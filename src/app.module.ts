import { Module } from '@nestjs/common';
import { AnalizerModule } from './analizer/analizer.module';


@Module({
  imports: [AnalizerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
