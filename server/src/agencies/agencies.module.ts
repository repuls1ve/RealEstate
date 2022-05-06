import { Module } from '@nestjs/common'
import { AgenciesService } from './services/agencies.service'
import { AgenciesController } from './controllers/agencies.controller'

@Module({
  providers: [AgenciesService],
  controllers: [AgenciesController],
  exports: [AgenciesService]
})
export class AgenciesModule {}