import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('SuperheroesController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('GET /superheroes - should return an empty array initially', async () => {
        const response = await request(app.getHttpServer())
            .get('/superheroes')
            .expect(200);

        expect(response.body).toEqual([]); // Expect an empty array at first
    });

    it('GET /superheroes - should return a list of superheroes', async () => {
        const superheroData = {
            name: 'Batman',
            superpower: 'Intelligence',
            humilityScore: 8,
        };

        // First, add a superhero
        await request(app.getHttpServer())
            .post('/superheroes')
            .send(superheroData)
            .expect(201);

        // Now, fetch the superheroes list
        const response = await request(app.getHttpServer())
            .get('/superheroes')
            .expect(200);

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: 'Batman',
                    superpower: 'Intelligence',
                    humilityScore: 8,
                }),
            ])
        );
    });
});
