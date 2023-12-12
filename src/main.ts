import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const port = 4200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Currently, for both of these endpoints it is possible to send additional properties that are not defined in the DTO.
  // This can lead to unforeseen bugs or security issues. For example, you could manually pass invalid createdAt and updatedAt values to the POST /articles endpoint.
  // Since TypeScript type information is not available at run-time, your application will not be able to identify that these fields are not available in the DTO.
  // In this way, you can inject invalid values. Here you have created an article that has an updatedAt value that precedes createdAt, which does not make sense.
  // To prevent this, you will need to filter any unnecessary fields/properties from client requests. Fortunately, NestJS provides an out-of-the-box for this as well.
  // All you need to do is pass the whitelist: true option when initializing the ValidationPipe inside your application.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Median APP')
    .setDescription(
      'Build REST API with nestJS and Prisma | TUTORIAL: https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0',
    )
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  // eslint-disable-next-line no-console
  console.log(
    chalk.cyan(`
>>> App is listening on ${chalk.bgGreen(`http://localhost:${port}`)}`),
  );
  // eslint-disable-next-line no-console
  console.log(
    chalk.green(`>>> Swagger is listening on ${chalk.bgCyan(`http://localhost:${port}/api`)}
  `),
  );

  await app.listen(port);
}
bootstrap();
