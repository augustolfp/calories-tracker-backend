import supertest from 'supertest';
import { prisma } from '../../src/config/database';
import app from '../../src/app';

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Tests POST /sign-up Endpoint', () => {
  it.todo('Should return an error if submitted user format is invalid');
  it.todo('Should return an error if user already exists');
  it.todo(
    'Should return a success status code if user input is valid, and it must be saved on DB'
  );
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
