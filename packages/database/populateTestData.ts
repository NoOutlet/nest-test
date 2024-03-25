import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    id: 1,
    email: "alice@prisma.io",
    name: "Alice",
    creationDate: new Date("2024-03-25T20:32:44.000Z"),
  },
  {
    id: 2,
    email: "bob@prisma.io",
    name: "Bob",
    creationDate: new Date("2024-03-26T20:32:44.000Z"),
  },
  {
    id: 3,
    email: "chris@prisma.io",
    name: "Chris",
    creationDate: new Date("2024-03-27T20:32:44.000Z"),
  }
];

// TODO create sample data to populate the database
const recipes = []
const comments = []
const follows = [] // figure out how to cause a user to follow another user

async function main() {
  users.forEach(data => prisma.user.create({ data }))
  // recipes.forEach(data => prisma.recipe.create({ data }))
  // comments.forEach(data => prisma.comment.create({ data }))
  // follows.forEach(data => prisma.idk.create({ data }))
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
