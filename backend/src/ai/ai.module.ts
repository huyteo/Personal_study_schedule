import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { HttpModule } from '@nestjs/axios';
import { StudySchedulesModule } from 'src/study-schedules/study-schedules.module';

@Module({
  imports: [HttpModule, StudySchedulesModule],
  providers: [AiService],
  controllers: [AiController],
})
export class AiModule {}
