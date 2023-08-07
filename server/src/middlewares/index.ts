// middlewares/authentication.ts
import { Request, Response, NextFunction } from 'express';
import Config from '../config';

const secureAppIdentifier = Config.SECURE_KEY;


export default function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
  const incomingSecureAppIdentifier = req.headers['x-secure-app']; 
  if (incomingSecureAppIdentifier === secureAppIdentifier) {
    next();
  } else {
    
    res.status(401).json({ message: 'Unauthorized' });
  }
}
