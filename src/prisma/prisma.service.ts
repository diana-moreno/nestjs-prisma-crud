import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    // pass PrismaClientOptions e.g. [logging levels](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/logging) or [error formatting](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/error-formatting/)
    super();
  }
}
