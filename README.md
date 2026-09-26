# Playwright QA Assessment

## Install

npm install

## Install browsers

npx playwright install

## Run tests

npx playwright test

## Run specific suite

npx playwright test tests/ui
npx playwright test tests/api

## API key

The API tests need a reqres.in API key. Create a `.env` file in the project root containing:

REQRES_API_KEY=your_api_key

`.env` is git-ignored, so the key is never committed.

