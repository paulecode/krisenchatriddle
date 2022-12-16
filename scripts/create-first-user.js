const { PrismaClient } = require("@prisma/client")

const USER_MAIL = "test@example.de"
const DATE = "2022-07-06T18:59:04.185Z"

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      createdAt: DATE,
      updatedAt: DATE,
      name: "test-account",
      email: USER_MAIL,
      hashedPassword:
        "JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJG5kWGFyWkN5MHdBNEFUNms5TUVkUHckcmkySjMvZlJoNEs0NHJOVlNNejBSNk1OYloySmljU2kzY0NadVJydE8zSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", // password: 8JojjYk1
    },
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
