import prisma from '../src/config/db.js';

async function main() {
  await prisma.$queryRaw`TRUNCATE tasks RESTART IDENTITY CASCADE;`;

  const tasks = [
    { title: "Set up project repository", completed: true },
    { title: "Install dependencies", completed: true },
    { title: "Create Task model", completed: false },
  ];

  for (const task of tasks) {
    const createdTask = await prisma.task.create({ data: task });
    console.log(`Seeded task: ID=${createdTask.id}, Title="${task.title}"`);
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });