import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { setupSwagger } from './swaggerSetup';
import { Logger } from '@nestjs/common';
import { from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

async function bootstrap() {
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;

  from(NestFactory.create(AppModule)).pipe(
    tap(app => {
      app.setGlobalPrefix(globalPrefix);
      setupSwagger(app);
    }),
    switchMap(app => from(app.listen(port))),
    tap(() => {
      Logger.log(
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
      );
    })
  ).subscribe();
}

bootstrap();
