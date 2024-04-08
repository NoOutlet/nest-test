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
  },
];

// TODO create sample data to populate the database
const recipes = [
  {
    id: 1,
    name: "Baked Potato",
    description: "",
    authorId: 3,
    creationDate: "2024-03-29T21:07:43.000Z",
  },
  {
    id: 2,
    name: "Bob's Spaghetti",
    description: "Hi, my name is Bob and I love spaghetti. Here's my recipe! The ingredients are: 1. Spaghetti, 2. Spagetti Sauce",
    authorId: 2,
    creationDate: "2024-03-28T21:07:43.000Z",
  },
  {
    id: 3,
    name: "Alice's Original Spaghetti",
    description: "Hi, my name is Bob and I love spaghetti. Here's my recipe! The ingredients are: 1. Spaghetti, 2. Spagetti Sauce, 3. Love",
    authorId: 1,
    creationDate: "2024-03-28T21:08:48.000Z",
  },
];
const comments = [
  {
    id: 1,
    text: "Hi my name is Alice and I approve this message 🤣",
    authorId: 1,
    recipeId: 1,
  },
  {
    id: 2,
    text: "Aleso ŝtelis mian recepton!",
    authorId: 2,
    recipeId: 3,
  },
  {
    id: 3,
    text: "There are better spaghetti recipes out there. I'm just saying. 🤷‍♂️",
    authorId: 1,
    recipeId: 2,
  },
  {
    id: 4,
    text: "哇泽，太好吃了",
    authorId: 3,
    recipeId: 3,
  },
];
const follows = [
  {
    A: 2,
    B: 3,
  },
  {
    A: 1,
    B: 3,
  },
  {
    A: 1,
    B: 2,
  },
  {
    A: 3,
    B: 1,
  },
  {
    A: 3,
    B: 2,
  },
];

async function main() {
  users.forEach((data) => prisma.user.create({ data }))
  recipes.forEach((data) => prisma.recipe.create({ data }))
  comments.forEach(data => prisma.comment.create({ data }))
  follows.forEach(({A, B}) => prisma.user.update({ where: { id: A }, data: { follows: { connect: { id: B } } } }))
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
