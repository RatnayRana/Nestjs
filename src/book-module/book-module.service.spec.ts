import { Test, TestingModule } from '@nestjs/testing';
import { BookModuleService } from './book-module.service';

describe('BookModuleService', () => {
  let service: BookModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookModuleService],
    }).compile();

    service = module.get<BookModuleService>(BookModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
