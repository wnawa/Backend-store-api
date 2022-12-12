import express, { Request, Response } from 'express'
import{dashboardstore} from '../services/dashboard';

const  Pstore=new dashboardstore();
const index=async (req: Request, res: Response)=> {
    
    res.json(await Pstore.index());
}

const topproducts=async (req: Request, res: Response)=> {
    
    res.json(await Pstore.topprod());
}

const dashboard_routes=(app:express.Application)=>{

//index product rout
app.get('/userorder',index )
app.get('/topproducts',topproducts )

}
export default dashboard_routes
