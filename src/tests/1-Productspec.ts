import { after } from 'node:test';
import{Product,Productstore} from '../Models/Product';
import app from "../server";
import supertest from "supertest";
const request = supertest(app);
let Pstore=new Productstore();

describe('Product Model',()=>{
beforeAll(async()=>{ await Pstore.drop()});
it('Should have index method',()=>{
expect(Pstore.index).toBeDefined();

});
it('Should have insert method',()=>{
    expect(Pstore.insert).toBeDefined();
    
    });
it('Should have show method',()=>{
    expect(Pstore.show).toBeDefined();
    
    });

it('insert method should add a product', async () => {
        const result = await Pstore.insert({
        id:1,
          name: 'Bridge to Terabithia',
          price: 250
          
        });
        expect(Object.keys(result).length).toBe(3);
     
      });
    
it('show method should return the added product', async () => {
        const result = await Pstore.show(1);
        expect(Object.keys(result).length).toBe(1);
       
      });
//
describe("Test endpoint Products responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/Products");
    expect(response.status).toBe(200);
    //done();
  });
});
})
//afterAll(async()=>{ await Pstore.drop()});
