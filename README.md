# PVD Things API

## APIs
- things
- lending / things
- lending / borrowers
- lending / loans
- lending / payments

## Environment variables
In order for the **Things API** to work, you'll need to set 3 environment variables in a `.env` file at the root of the project folder:
```js
NODE_ENV=development
API_KEY=[value]
AIRTABLE_KEY=[value]
AIRTABLE_BASE_ID=[value]
SUPABASE_URL=[value]
SUPABASE_PUB_ANON_KEY=[value]
DISCORD_WHITELIST="mail@email.com another@email.com"
```

## Run the server
```bash
npm run install // on first run
npm run start
```
The server will start on port `8088`.

## Local Development
When running locally, no authentication is needed for the `lending` API. In production environments, these endpoints require a token provided by Supabase Authentication (via Discord).
