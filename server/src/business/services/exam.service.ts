import { examRepository } from '../../data/repository/index';
import {SearchDto} from "../dto"

export class ExamService{

    public searchByMatricule(searchDto:SearchDto):any{
        const results = examRepository.findBy({
            candidateMatricule:searchDto.searchDomaine
        })
        return results
    }
}
