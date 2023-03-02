# Things API

## Purpose
The purpose of the Things API is to retrieve current catalog data from an Airtable base and then deliver it in a format that is optimized for the Things app.

## Environment variables
In order for the API to work, you'll need to set 3 environment variables in a `.env` file at the root of the project folder:
```bash
API_KEY=[value]
AIRTABLE_KEY=[value]
AIRTABLE_BASE_ID=[value]
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
    status: "OK",
    things: Thing[],
    categories: string[],
    locations: string[] // [DEPRECATED]
}
```
