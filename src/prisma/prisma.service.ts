import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
// implements OnModuleInit, OnModuleDestroy
export class PrismaService extends PrismaClient {
  constructor() {
    // pass PrismaClientOptions e.g. [logging levels](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/logging) or [error formatting](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/error-formatting/)
    super({ log: ['info'] });
  }

  // To connect the database explicitly, without this, connects lazy.

  // async onModuleInit() {
  //   await this.$connect();
  // }

  // async onModuleDestroy() {
  //   await this.$disconnect();
  // }
}
