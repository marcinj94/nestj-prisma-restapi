import { Test, TestingModule } from '@nestjs/testing';
// eslint-disable-next-line import/no-unresolved
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
