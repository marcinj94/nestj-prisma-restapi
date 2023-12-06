import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

const port = 4200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // eslint-disable-next-line no-console
  console.log(
    chalk.green(`
>>> App is listening on ${chalk.bgGreen(`http://localhost:${port}`)}
  `),
  );

  await app.listen(port);
}
bootstrap();
