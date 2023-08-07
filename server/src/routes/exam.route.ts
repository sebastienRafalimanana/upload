import { Router, Request, Response } from 'express';
import {ExamService} from "../business/services/index"

export class ExamRoute {
  private router: Router
  private examService:ExamService


  constructor() {
    this.router = Router();
    this.examService =new ExamService();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/result', this.searchResult);    
  }

  private searchResult(req: Request, res: Response): void {
    res.json("Resulta de l'exament");
  }

  
  public getRouter(): Router {
    return this.router;
  }
}