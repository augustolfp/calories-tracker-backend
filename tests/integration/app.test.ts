import supertest from 'supertest';
import { prisma } from '../../src/config/database';
import app from '../../src/app';
import * as scenarios from './factories/scenarioFactory';
import * as userFactory from './factories/userFactory';

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  await scenarios.deleteDbData();
});

const server = supertest(app);

describe('Tests POST /sign-up Endpoint', () => {
  it('Should return an error if submitted email format is invalid', async () => {
    const user = await userFactory.createUser();
    const result = await server.post('/sign-up').send({
      ...user,
      email: '@gmail.com'
    });

    expect(result.status).toBe(422);
  });

  it('Should return an error if user email already exists', async () => {
    const user = await userFactory.createUser();
    const randomUserInsert = await userFactory.insertUserOnDB();
    const result = await server.post('/sign-up').send({
      name: user.name,
      email: randomUserInsert.email,
      password: user.password
    });

    expect(result.status).toBe(409);
  });
  it('Should return a success status code if user input is valid, and it must be saved on DB', async () => {
    const user = await userFactory.createUser();

    const result = await server.post('/sign-up').send(user);
    const userCheck = await userFactory.checkUserOnDB(user);
    expect(result.status).toBe(201);
    expect(userCheck).toBe(true);
  });
});

describe('Tests POST /sign-in Endpoint', () => {
  it.todo('Should return an error if submitted user format is invalid');
  it.todo('Should return the same error for wrong email and/or wrong password');
  it.todo(
    'Should return a success status code and a valid JWT token if user input is valid'
  );
});

describe('Tests POST /add-counted-day Endpoint', () => {
  it.todo('Should return an error if Auth header is not provided');
  it.todo('Should return an error if date in body not properly formatted');
  it.todo('Should allow user to insert day with no notes');
  it.todo('Should return an error if selected day already exists for the user');
  it.todo(
    'Should return a success status code if user input is valid, and it must be saved on DB'
  );
});

describe('Tests GET /get-days-data Endpoint', () => {
  it.todo('Should return an error if Auth header is not provided');
  it.todo(
    'Should return all days-data that belongs to specified user, and data must be properly formatted'
  );
  it.todo('Should return an empty array for user with no counted days');
  it.todo('Should return zeroed stats for days without recorded meals');
});
