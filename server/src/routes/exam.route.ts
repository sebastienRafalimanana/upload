import { Router, Request, Response } from 'express';
import {ExamService} from "../business/services/index"


export class ExamRoute {
  private router: Router
  private examService:ExamService
  
  
  constructor() {
    this.examService =new ExamService()
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.post('/result', (req, res) => this.searchResult(req, res));    
  }

  private async searchResult(req: Request, res: Response) {
     let payload = req.body.payload
    if (payload !="") {
      let result = await this.examService.searchByMatricule(payload)
      console.log(result);
      
      return res.json(result)
    }

  
  }

  
  public getRouter(): Router {
    return this.router;
  }
}