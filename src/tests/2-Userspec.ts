import{User,Userstore} from '../Models/User';
import app from "../server";
import supertest from "supertest";
const request = supertest(app);
let Pstore=new Userstore();

describe('User Model',()=>{
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

it('insert method should add a User', async () => {
        const result = await Pstore.insert({
          id:1,
          firstname: 'Bridge to Terabithia',
          lastname:'nawar',
          password: '1234',
          username:'wn'
          
        });
        expect(Object.keys(result).length).toBe(5);
       
      });
describe("Test endpoint authenticate responses", () => {

        it("gets the api endpoint", async () => {
          const response = await request.get("/authenticate");
          expect(response.status).toBe(200);
          //done();
        });
      });
    })

//afterAll(async()=>{ await Pstore.drop()});