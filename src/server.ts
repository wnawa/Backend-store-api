import express, { Request, Response } from 'express'

import bodyParser from 'body-parser'

import Product_handlers from './Handlers/Product_handlers';
import Order_handlers from './Handlers/Order_handlers';
import User_handlers from './Handlers/User_handlers';
import Dashboard_handlers from './Handlers/Dashboard_handlers';
import { pseudoRandomBytes } from 'crypto';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

Product_handlers(app);
User_handlers(app);
Order_handlers(app);
Dashboard_handlers(app);
app.listen(8080, function () {
    console.log(`starting app on: ${address}`)
})

export default app;