import { Module } from '@nestjs/common';
// eslint-disable-next-line import/no-unresolved
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}
