import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookModuleModule } from './book-module/book-module.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    AuthModule,
    BookModuleModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
