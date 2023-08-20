import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: 'http://127.0.0.1:5173',
    
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('krishna Api')
    .setDescription('Api disponible pour l\'application quincaillerie Krishna Mayotte')
    .setVersion('1.2.15')
    .addTag('Product (Materiel)')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
