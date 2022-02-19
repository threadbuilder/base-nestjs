/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Modument WMS API')
    .setDescription('The WMS API description')
    .setVersion('1.0')
    // .addTag('ModumentOMS')
    .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/nestjs', app, document);

  // swager base url
  // http://localhost:8000/api/nestjs
  
  await app.listen(8000);
}
bootstrap();
