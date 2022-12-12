
import express, { Request, Response ,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { env } from 'process';

 const verifyAuthToken = (req: Request, res: Response, next:NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = String(authorizationHeader).split(' ')[1]
        const decoded = jwt.verify(token, String(env.TOKEN_SECRET))

        next()
    } catch (error) {
        res.status(401)
    }
}

export default  verifyAuthToken;