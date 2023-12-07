import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// The Prisma module will be responsible for creating a singleton instance of the PrismaService and allow sharing of the service throughout your application.
// To do this, you will add the PrismaService to the exports array in the prisma.module.ts file
// Now, any module that imports the PrismaModule will have access to PrismaService and can inject it into its own components/services.
// This is a common pattern for NestJS applications.

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
