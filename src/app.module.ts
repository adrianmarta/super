import { Module } from '@nestjs/common';
import { SuperheroesController } from './superhero.controller';
import { SuperheroesService } from './superhero.service';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class AppModule {}
