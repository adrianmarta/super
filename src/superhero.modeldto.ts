import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
    @IsString()//validation to make sure is string
    name: string;

    @IsString()//validation to make sure is string
    superpower: string;

    @IsInt()//validation to make sure is int
    @Min(1)
    @Max(10)//validation to make sure the humility score is between 1 and 10
    humilityScore: number;
}
