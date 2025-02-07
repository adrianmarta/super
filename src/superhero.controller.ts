import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService } from './superhero.service';
import { CreateSuperheroDto } from './superhero.modeldto';

@Controller('superheroes')
export class SuperheroesController {
    constructor(private readonly superheroesService: SuperheroesService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))// to make sure all 3 of the fields are not empty
    addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
        return this.superheroesService.addSuperhero(createSuperheroDto);
    }

    @Get()
    getSuperheroes() {
        return this.superheroesService.getSuperheroes();
    }
}
