import { Pool } from 'pg'
import Db from '../Database';

export type Product={
     id :number;
    name :string;
    price :number

}
export class Productstore{
    //Read

async index():Promise<Product[]>{
    try{
        const conn=await Db.connect();
        const sql='select * from products;';
        const result=await conn.query(sql);
        conn.release();
        return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant Get products${err} ');
        }
}

async show(id:number):Promise<Product[]>{
    try{
        const conn=await Db.connect();
        const sql='select * from products where id=$1;';
        const result=await conn.query(sql,[id]);
        conn.release();
        return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant Get product${err} ');
        }
}
//Insert c

async insert(b:Product):Promise<Product>{
            try{
                const conn=await Db.connect();
                const sql='insert into products(id,name,price) values($1,$2,$3) RETURNING * ;';
                const result=await conn.query(sql,[b.id,b.name,b.price]);
                conn.release();
                return result.rows[0];
                }
           
        
            catch(err){

                throw new Error('Cant Insert into product${err} ');
            }
}

async drop():Promise<Product[]>{
    try{
        const conn=await Db.connect();
        const sql='delete from products;';
        const result=await conn.query(sql);
        conn.release();
        return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant deleteall from products${err} ');
        }
}



}