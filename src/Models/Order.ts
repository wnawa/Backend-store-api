import { Pool } from 'pg'
import Db from '../Database';

export type Order={
     id :number;
    //product_id :number;
   // product_quantity:number;
    user_id :number  ;
    status:boolean;

}
export class Orderstore{
    async index(id:number):Promise<Order[]>{
        try{
            const conn=await Db.connect();
            const sql='select * from orders ;';
            const result=await conn.query(sql,[id]);
            conn.release();
            return result.rows;
            }
            catch(err){
    
                throw new Error(String(err));
            }
    }

async show(id:number):Promise<Order[]>{
    try{
        const conn=await Db.connect();
        const sql='select * from orders where  user_id=$1;';
        const result=await conn.query(sql,[id]);
        conn.release();
        return result.rows;
        }
        catch(err){

            throw new Error(String(err));
        }
}
async insertorder(neworder:Order):Promise<Order>{
    try{const conn=await Db.connect();
        const sql='insert into orders(id,status_order,user_id) values($1,$2,$3) RETURNING * ;';
            const result=await conn.query(sql,[neworder.id,neworder.status,neworder.user_id]);
              conn.release();
        return result.rows[0];
        } catch(err){

            throw new Error('Cant Insert Order${err} ');
        }
}
async insertproduct(orderid:number,productid:number,quantity:number):Promise<{}>{
    try{const conn=await Db.connect();
        const sql='insert into order_details(order_id,product_id,quantity) values($1,$2,$3) RETURNING * ;';
            const result=await conn.query(sql,[orderid,productid,quantity]);
              conn.release();
        return result.rows[0];
        } catch(err){

            throw new Error('Cant insert product to Order${err} ');
        }
}

async drop():Promise<void>{
    try{
        const conn=await Db.connect();
        const sql='delete from order_details;delete from orders;';
        const result=await conn.query(sql);
        conn.release();
        //return result.rows;
        }
           
   
     catch(err){

            throw new Error('Cant deleteall from orders${err} ');
        }

    } 

}