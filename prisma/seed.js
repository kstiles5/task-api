import prisma from '../src/config/db.js';

async function main() {
  // Clear the tasks table and reset ID sequence
  await prisma.$queryRaw`TRUNCATE tasks RESTART IDENTITY CASCADE;`;

  // Seed tasks with explicit IDs
  const tasks = [
    { id: 1, title: 'Set up project repository', completed: true },
    { id: 2, title: 'Install dependencies', completed: true },
    { id: 3, title: 'Create Task model', completed: false },
  ];

  for (const task of tasks) {
    await prisma.task.create({ data: task });
    console.log(`Seeded task: ID=${task.id}, Title="${task.title}"`);
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