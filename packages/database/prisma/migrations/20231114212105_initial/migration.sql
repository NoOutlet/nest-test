-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    CONSTRAINT "Comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comments_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_IngredientToRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_IngredientToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IngredientToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_IngredientToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_IngredientToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IngredientToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToRecipe_AB_unique" ON "_IngredientToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToRecipe_B_index" ON "_IngredientToRecipe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToTag_AB_unique" ON "_IngredientToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToTag_B_index" ON "_IngredientToTag"("B");
