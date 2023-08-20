import { Controller, Delete, Get, Param, Post, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileUploadDto } from './dto/upload-file.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { UploadService } from './upload.service';


@Controller('file')
export class UploadController {
    constructor(private readonly uploadService:UploadService){}

    /**
     * Upload fichier (image)
     */
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
    @ApiBody({
        description: 'photo du produit',
        type: FileUploadDto,
    })
    @ApiConsumes('multipart/form-data')
    uploadFile(@UploadedFile() file) {
        return this.uploadService.urlFile(file)
    }
    /**
     * Download file 
     */
    @Get('/media/:fileName')
    getFile(@Param('fileName') fileName: string): StreamableFile {
        const filePath = "uploads/" + fileName
        const file = createReadStream(join(process.cwd(), filePath));
        return new StreamableFile(file);
    }
     /**
     * Remove file 
     */
     @Delete('/media/:fileName')
     removeFile(@Param('fileName') fileName: string) {
         return this.uploadService.removeFile(fileName)
     }
    
}
