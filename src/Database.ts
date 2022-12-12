import dotenv from 'dotenv'
import { Pool } from 'pg'
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "..//..//.env.txt") })

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  POSTGRES_DBPORT,
  ENV,
 // BCRYPT_PASSWORD,
 // SALT_ROUNDS,
 // TOKEN_SECRET,
} = process.env

let DB =new  Pool();


if(ENV === 'dev') {
   DB = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  })
}

else if(ENV === 'test') {
  
   DB = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  })
}

export default DB;//, BCRYPT_PASSWORD, SALT_ROUNDS,TOKEN_SECRET };