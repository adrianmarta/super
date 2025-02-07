import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.model';
import { CreateSuperheroDto } from './superhero.modeldto';

@Injectable()
export class SuperheroesService {
    private superheroes: Superhero[] = [];


    addSuperhero(createSuperheroDto: CreateSuperheroDto): Superhero {
        const { name, superpower, humilityScore } = createSuperheroDto;

        const newHero: Superhero = {
            name,
            superpower,
            humilityScore,
        };

        this.superheroes.push(newHero);
        return newHero;
    }// adding a new hero

    getSuperheroes(): Superhero[] {
        return [...this.superheroes].sort((a, b) => b.humilityScore - a.humilityScore);
    }// getting all heroes sorted descending
}
