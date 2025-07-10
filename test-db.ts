
import { PrismaClient } from './generated/prisma/index.js'; 

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.account.findMany();
  console.log(result);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());