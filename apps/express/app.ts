const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.get("/recipes", async (req, res) => {
  const recipes = await prisma.recipe.findMany({
    // orderBy: [
    //   {
    //     // creationDate: 'desc',
    //     id: 'desc'
    //   }
    // ],
  });

  res.send(recipes);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
