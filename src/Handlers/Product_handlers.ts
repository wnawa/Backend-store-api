import express, { Request, Response } from 'express'
import{Product,Productstore} from '../Models/Product';
import  verifyAuthToken from './authentication_handler';
const  Pstore=new Productstore();
const index=async (req: Request, res: Response)=> {
    
    res.json(await Pstore.index());
}
const show= async(req: Request, res: Response) => {
    try {
      const result= await Pstore.show(Number(req.params.id));
      res.json(result);
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}
const insert=async (req: Request, res: Response) => {
    const Product: Product = {
        id:Number(req.query.id),
      name:String( req.query.name) ,
      price: Number(req.query.price)
    }
    try {
       res.json(await Pstore.insert(Product))
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}
const Product_routes=(app:express.Application)=>{

//index product rout
app.get('/Products',index )
//show product rout
app.get('/Products/:id',show)
//create product rout
app.post('/Products',verifyAuthToken,insert)

}
export default Product_routes
