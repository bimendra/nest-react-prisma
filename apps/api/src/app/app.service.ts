import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getData(): Promise<User> {
    const user = await prisma.user.findFirst();
    console.log(user);
    return user;
  }
}
