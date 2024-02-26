import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  // RECIPES

  // get a recipe by id -> returns everything

  // get a list of recipes sorting by time -> returns name, ID and author

  // get all recipes by an author sorting by time -> returns name, ID and author

  // get all recipes by all your followed authors sorting by time -> returns name, ID and author

  // add comment to recipe by author id and recipe id, and comment text

  // create a recipe with author, name

  // USERS

  // get user by id -> returns everything

  // update user name and email

  // follow a user using your id and their id

  // create a user


  // OAUTH??????

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
