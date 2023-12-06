import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const port = 4200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Median APP')
    .setDescription(
      'Build REST API with nestJS and Prisma | TUTORIAL: https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0',
    )
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

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
