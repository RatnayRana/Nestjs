import { Module } from '@nestjs/common';
import { BookModuleController } from './book-module.controller';
import { BookModuleService } from './book-module.service';

@Module({
  controllers: [BookModuleController],
  providers: [BookModuleService]
})
export class BookModuleModule {}
