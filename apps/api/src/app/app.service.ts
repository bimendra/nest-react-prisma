import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getData(): Promise<any> {
    const user = await prisma.user.findFirst();
    console.log(user);
    return {
      name: user.name,
      role: 'admin',
    };
  }
}
