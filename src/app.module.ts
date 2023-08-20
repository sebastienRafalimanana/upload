import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleModule } from './modules/sale/sale.module';
import { ProductModule } from './modules/product/product.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 13306,
    username: 'root',
    password: 'root',
    database: 'krishna',
    autoLoadEntities:true,
    synchronize: true,
  })
  ,ProductModule, UploadModule,SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
