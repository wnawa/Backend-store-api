import express, { Request, Response } from 'express'
import{Order,Orderstore} from '../Models/Order';
import  verifyAuthToken from './authentication_handler';
const  Pstore=new Orderstore();

const show= async(req: Request, res: Response) => {
    try {
      const result= await Pstore.show(Number(req.params.userID));
      res.json(result);
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}

const addorder= async(req: Request, res: Response) => {
  console.log(String(req.params.orderID));
  try {
 
    const result1= await Pstore.insertorder({id:Number(req.params.orderID),status:true,user_id:Number(req.params.userID)});
    const result2= await Pstore.insertproduct(Number(req.params.orderID),Number(req.body.productid),Number(req.body.quantity));
    res.json(  result2);
  } catch (err) {
     res.status(400)
     res.json(err)
  }
}
const insertproduct= async(req: Request, res: Response) => {

  try {
  
    const result= await Pstore.insertproduct(Number(req.params.id),Number(req.body.productid),Number(req.body.quantity));
  
    res.json(result);
  } catch (err) {
     res.status(400)
     res.json(err)
  }
}
const Order_routes=(app:express.Application)=>{


//show product rout

app.get('/user/:userID/Order',verifyAuthToken,show)
app.post('/user/:userID/Order/:orderID/product',verifyAuthToken,addorder)
app.post('/Order/:id/product',verifyAuthToken,insertproduct)


}
export default Order_routes
