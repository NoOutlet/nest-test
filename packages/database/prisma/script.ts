import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const ingredients = await prisma.ingredient.createMany({
        
//   const user = await prisma.user.create({
//     data: {
//       name: "Chris",
//       email: "chris@prisma.io",
//       recipes: {
//         create: [
//           {
//             name: "Baked Potato",
//             ingredients: {
//               create: [
//                 {
//                   name: "Potato",
//                 },
//                 {
//                   name: "Cheese",
//                 },
//               ],
//             },
//             comments: {
//               create: [
//                 {
//                   text: "Delicious!",
//                   author: {
//                     connect: { id: 1 },
//                   },
//                 },
//               ],
//             },
//           },
//           {
//             name: "Spaghetti",
//             ingredients: {
//               create: [
//                 {
//                   name: "Noodles",
//                   tags: {
//                     create: [
//                       {
//                         name: "Pasta",
//                       },
//                     ],
//                   },
//                 },
//                 {
//                   name: "Sauce",
//                   tags: {
//                     create: [
//                       {
//                         name: "Tomato",
//                       },
//                     ],
//                   },
//                 },
//                 {
//                   name: "Meatballs",
//                   tags: {
//                     create: [
//                       {
//                         name: "Meat",
//                       },
//                     ],
//                   },
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     },
//   });
//   console.log(user);
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
