import { Exam } from '../entity/exam.entity';
import { AppDataSource } from '../data_source';

export const examRepository = AppDataSource.getRepository(Exam)
