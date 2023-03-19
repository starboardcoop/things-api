# PVD Things API

## APIs
- things
- lending / things
- lending / borrowers
- lending / loans

## Environment variables
In order for the **Things API** to work, you'll need to set 3 environment variables in a `.env` file at the root of the project folder:
```toml
API_KEY=[value]
AIRTABLE_KEY=[value]
AIRTABLE_BASE_ID=[value]
```

The **Lending API** requires 3 more variables to work in production. Note that authentication is not needed for local dev.

Only whitelisted Discord accounts can authenticate with the `POST /auth/token` endpoint. Accounts are whitelisted by space-separated emails.
```toml
SUPABASE_URL=[value]
SUPABASE_PUB_ANON_KEY=[value]
DISCORD_WHITELIST="mail@email.com another@email.com"
```

## Run the server
```bash
npm run install // on first run
npm run start
```

## Data Contracts

**Thing**
```ts
{
    id: string, // UUID from Airtable
    name: string,
    categories: string[],
    image: string, // URL to image source
    stock: number, // total in catalog
    location: string // [DEPRECATED]
}
```

**Response**
```ts
{
    status: "OK", // [DEPRECATED]
    things: Thing[],
    categories: string[],
    locations: string[] // [DEPRECATED]
}
```
