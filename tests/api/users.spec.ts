import { test, expect } from '@playwright/test';
import { UsersResponse } from '../../src/api/types/user.types.js';
import * as dotenv from 'dotenv';

dotenv.config();

test('GET users', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': `${process.env.REQRES_API_KEY}`
    }
  });


// console.log(process.env.REQRES_API_KEY);

  expect(response.status()).toBe(200);

  const body: UsersResponse = await response.json();

  body.data.forEach(user => {
    expect(user.id).toBeDefined();
    expect(user.email).toContain('@');
    expect(user.first_name).toBeTruthy();
  });
});

test('POST create user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    headers: {
      'x-api-key': `${process.env.REQRES_API_KEY}`
    },
    data: {
      name: 'Piyush',
      job: 'SDET'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.id).toBeDefined();
  expect(body.createdAt).toBeDefined();
});

test('DELETE user', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': `${process.env.REQRES_API_KEY}`
    }
  });

  expect(response.status()).toBe(204);
});