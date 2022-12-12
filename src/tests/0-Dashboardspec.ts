import{dashboardstore} from '../services/dashboard';
import app from "../server";
import supertest from "supertest";
const request = supertest(app);
let Pstore=new dashboardstore();

describe('Dashboard Service',()=>{
    it('Should have index method',()=>{
        expect(Pstore.index).toBeDefined();
        
        })
    
    it('Should have topprod method',()=>{
            expect(Pstore.topprod).toBeDefined();
            
     })
    describe("Test endpoint userorder responses", () => {
        it("gets the api endpoint", async () => {
          const response = await request.get("/userorder");
          expect(response.status).toBe(200);
          //done();
        });
      });
      describe("Test endpoint topproducts responses", () => {
        it("gets the api endpoint", async () => {
          const response = await request.get("/topproducts");
          expect(response.status).toBe(200);
          //done();
        });
      });

    
})