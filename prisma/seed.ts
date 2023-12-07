import { PrismaClient } from '@prisma/client';

// You are using an upsert query instead of a create query because upsert removes errors related to accidentally trying to insert the same record twice.
// Execute seeding with the following command:
// $ npx prisma db seed

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: {
      title: 'Prisma Adds Support for MongoDB', // The upsert function will only create a new article if no article matches the where condition.
    },
    // eslint-disable-next-line object-curly-newline
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
    },
  });
  const post2 = await prisma.article.upsert({
    where: {
      title: "What's new in Prisma? (Q1/22)", // The upsert function will only create a new article if no article matches the where condition.
    },
    // eslint-disable-next-line object-curly-newline
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  // eslint-disable-next-line no-console
  console.log({
    post1,
    post2,
  });
}

// execute the main function
main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
