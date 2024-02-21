import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const allUsers = await prisma.user.findMany({
    include: {
      follows: true,
      followers: true,
      recipes: true,
      authoredComments: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });