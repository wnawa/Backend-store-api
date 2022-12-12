import { Pool } from 'pg'
//import {Db, CRYPT_PASSWORD,SALT_ROUNDS} from '../Database';
import Db from '../Database';
import bcrypt from 'bcrypt';
import { env } from 'process';

export type User={
     id :number;
     firstname :string;
     lastname:string;
     password:string;
     username:string;

}
export class Userstore{
    //Read
  
async index():Promise<User[]>{
    try{
        const conn=await Db.connect();
        const sql='select * from users;';
        const result=await conn.query(sql);
        conn.release();
        return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant Get Users${err} ');
        }

}

async show(id:number):Promise<User[]>{
    try{
        const conn=await Db.connect();
        const sql='select * from users where id=$1';
        const result=await conn.query(sql,[id]);
        conn.release();
        return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant Get User${err} ');
        }
}
//Insert c

async insert(b:User):Promise<User>{

const user_password=String(b.password);
const hash=bcrypt.hashSync(user_password+env.BCRYPT_PASSWORD,parseInt(env.SALT_ROUNDS as string ))
//console.log(hash);
            try{
                const conn=await Db.connect();
                const sql='insert into users(id,firstname,lastname,password,username) values($1,$2,$3,$4,$5) RETURNING * ;';
                const result=await conn.query(sql,[b.id,b.firstname,b.lastname,hash,b.username]);
                
                conn.release();
                return result.rows[0];
                }
           
        
            catch(err){

                throw new Error('Cant Insert into user${err} ');
            }
}
async authenticate(username:string,password:string):Promise<User |null>{
try{
    
    const conn=await Db.connect();
    const sql='select * from users where username=$1 ;';
    const result=await conn.query(sql,[username]);
    conn.release();
    //console.log(result.rows.length);
    //return result.rows;
    if (result.rows.length){
        const user=result.rows[0];
        if (bcrypt.compareSync(password+env.BCRYPT_PASSWORD, user.password))
        return user
    }


  // return null;
}
catch(err){

    throw new Error('Invalid Login ${err}');
}
return null;
}
async drop():Promise<void>{
    try{
        const conn=await Db.connect();
        const sql='delete from users;';
        const result=await conn.query(sql);
        conn.release();
        //return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant deleteall from users${err} ');
        }

    }
}