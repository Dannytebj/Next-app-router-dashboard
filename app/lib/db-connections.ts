import pg from 'pg';

const { Client } = pg
 
const client = new Client({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'next_dash',
});

await client.connect();

export {
    client
}