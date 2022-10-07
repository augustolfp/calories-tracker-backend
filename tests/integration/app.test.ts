import supertest from 'supertest';
import { prisma } from '../../src/config/database';
import app from '../../src/app';
import * as scenarios from './factories/scenarioFactory';
import * as userFactory from './factories/userFactory';
import * as tokenFactory from './factories/tokenFactory';
import * as dayFactory from './factories/dayFactory';

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

  it.todo('Should return an error if user password doesnt attend criteria');
  it.todo('Should return an error if user name doesnt attend criteria');
});

describe('Tests POST /sign-in Endpoint', () => {
  it('Should return an error if submitted user format is invalid', async () => {
    const user = await userFactory.insertUserOnDB();
    const noEmailResult = await server.post('/sign-in').send({
      password: user.password
    });

    const noPasswordResult = await server.post('/sign-in').send({
      email: user.email
    });

    expect(noEmailResult.status).toBe(400);
    expect(noPasswordResult.status).toBe(400);
  });

  it('Should return the same error for wrong email and/or wrong password', async () => {
    const wrongUser = await userFactory.createUser();
    const user = await userFactory.insertUserOnDB();

    const wrongEmailResult = await server.post('/sign-in').send({
      email: wrongUser.email,
      password: user.password
    });

    const wrongPassResult = await server.post('/sign-in').send({
      email: user.email,
      password: wrongUser.password
    });

    const wrongEmailAndPassResult = await server.post('/sign-in').send({
      email: wrongUser.email,
      password: wrongUser.password
    });

    expect(wrongEmailAndPassResult.status).toBe(401);
    expect(wrongEmailAndPassResult.body).toBeInstanceOf(wrongEmailResult.body);
    expect(wrongEmailAndPassResult.body).toBeInstanceOf(wrongPassResult.body);
  });

  it('Should return a success status code and a valid JWT token if user input is valid', async () => {
    const user = await userFactory.insertUserOnDB();

    const result = await server.post('/sign-in').send({
      email: user.email,
      password: user.password
    });
    const tokenCheck = tokenFactory.validateToken(result.body.token, user);

    expect(result.status).toBe(201);
    expect(tokenCheck).toBe(true);
  });
});

describe('Tests POST /add-counted-day Endpoint', () => {
  it('Should return an error if Auth header is not provided', async () => {
    const countedDay = await dayFactory.createDay();

    const result = await server.post('/add-counted-day').send(countedDay);

    expect(result.status).toBe(401);
  });

  it('Should return an error if date in body not properly formatted', async () => {
    const { authHeader } = await scenarios.loggedUser();
    const countedDay = await dayFactory.createDay();

    const result = await server
      .post('/add-counted-day')
      .set('Authorization', authHeader)
      .send({
        ...countedDay,
        date: '32/13/2021'
      });

    expect(result.status).toBe(400);
  });
  it('Should allow user to insert day with no notes', async () => {
    const { authHeader } = await scenarios.loggedUser();
    const countedDay = await dayFactory.createDay();

    const result = await server
      .post('/add-counted-day')
      .set('Authorization', authHeader)
      .send({
        ...countedDay,
        notes: ''
      });

    expect(result.status).toBe(201);
  });
  it('Should return an error if selected day already exists for the user', async () => {
    const { authHeader, user } = await scenarios.loggedUser();
    const insertDay = await dayFactory.insertRandomDayOnDB(user.id);

    const result = await server
      .post('/add-counted-day')
      .set('Authorization', authHeader)
      .send({
        day: insertDay.day,
        notes: insertDay.notes
      });

    expect(result.status).toBe(409);
  });
  it('Should return a success status code if user input is valid, and it must be saved on DB', async () => {
    const { authHeader } = await scenarios.loggedUser();
    const countedDay = await dayFactory.createDay();
    const result = await server
      .post('/add-counted-day')
      .set('Authorization', authHeader)
      .send(countedDay);

    expect(result.status).toBe(201);
  });
});

describe('Tests GET /get-days-data Endpoint', () => {
  it.todo('Should return an error if Auth header is not provided');
  it.todo(
    'Should return all days-data that belongs to specified user, and data must be properly formatted'
  );
  it.todo('Should return an empty array for user with no counted days');
  it.todo('Should return zeroed stats for days without recorded meals');
});
