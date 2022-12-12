import express, { Request, response, Response } from 'express'
import{User,Userstore} from '../Models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import  verifyAuthToken from './authentication_handler';
import { env } from 'process';
const  Pstore=new Userstore();
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
 
    const User: User = {
        id:Number(req.query.id),
        firstname:String( req.query.firstname) ,
        lastname: String(req.query.lastname),
        password:String(req.query.password),
        username:String(req.query.username),
    }
    try {
        const newusercreated=await Pstore.insert(User)
        const token=jwt.sign({user:newusercreated},String(env.TOKEN_SECRET))  ;
        console.log(token);
       res.json(newusercreated)
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}
const authenticate = async (req: Request, res: Response) => {
    //const user: User = {
     const username= req.params.username;
      const password= req.params.password;
      //console.log(username);
   // }
    try {
        const u = await Pstore.authenticate(username, password);
        var token = jwt.sign({ user: u }, String(env.TOKEN_SECRET));
        //if (u)
      //  res.redirect('/user'+String(u.id));
       res.json(token);
    } catch(error) {
        res.status(401);
        res.json({ error });
    }
}
const User_routes=(app:express.Application)=>{

//index users rout
//app.get('/user',index )
app.get('/user', verifyAuthToken,index )
//show user details(Profile) rout
app.get('/user/:id', verifyAuthToken,show)
//create user rout
app.post('/Signup', insert)
//signin(authenticate) user rout
app.get('/authenticate', authenticate)
}
export default User_routes
