import { Pool } from 'pg';
import Db from '../Database';

export class dashboardstore{
    //Read

async index():Promise<{un:string,id:number}>{
    try{
        const conn=await Db.connect();
        const sql='SELECT users.username,orders.id FROM users INNER JOIN orders ON users.id = orders.user_id;';
        const result=await conn.query(sql);
        conn.release();
        return result.rows[0];
        }
           
   
     catch(err){

            throw new Error('Cant Get query{err} ');
        }
}
async topprod():Promise<number[]>{
    try{
        const conn=await Db.connect();
        const sql='SELECT id,price FROM products ORDER BY price DESC limit 5 ;';
        const result=await conn.query(sql);
        conn.release();
        return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant Get query{err} ');
        }
}
}

