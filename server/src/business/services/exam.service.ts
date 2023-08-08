import { raw } from 'mysql2';
import { examRepository } from '../../data/repository/index';
import {SearchDto} from "../dto"

export class ExamService{

    public searchByMatricule(matricule:string):any{
        const results = examRepository.findOneBy({
            candidateMatricule:matricule,
        
        })
        return results
    }
}
