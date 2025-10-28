import { PrismaClient } from '@prisma/client';

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export async function findAll() {
  return prisma.task.findMany();
}

export async function findTaskById(id) {
  return prisma.task.findUnique({
    where: { id },
  });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}
