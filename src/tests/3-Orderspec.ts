import { before } from 'node:test';
import { type } from 'os';
import{Order,Orderstore} from '../Models/Order';
import app from "../server";
import supertest from "supertest";
const request = supertest(app);

 const Pstore=new Orderstore();

 
describe('Order Model',()=>{
  beforeAll(async()=>{ await Pstore.drop()});
  it('Should have insertorder method',()=>{
    expect(Pstore.insertorder).toBeDefined();
    
});

it('insertorder method should insert  the added order for user', async () => {
      
  const result = await Pstore.insertorder({id:1,status:true,user_id:1});
      expect(Object.keys(result).length).toBe(3);
         
});
it('Should have show method',()=>{
    expect(Pstore.show).toBeDefined();
    
    });

it('Should have insertproduct method',()=>{
      expect(Pstore.insertproduct).toBeDefined();
      
  });

  it('insertproduct method should add a product to the given order', async () => {
   
    let  result = await Pstore.insertproduct( 1,1, 5);
    expect(Object.keys(result).length).toBe(4);
  }); 

})
afterAll(async()=>{ await Pstore.drop()});