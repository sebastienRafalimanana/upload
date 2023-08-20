import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class UploadService {

    urlFile(filePath:any){
        let url = "http://localhost:3000/file/media/"+filePath.filename
        return url
    }
    removeFile(fileName:string){
        const filePath = "uploads/" + fileName
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return "supression avec succés"
        }
        return "fichier introuvable"
    }
}
