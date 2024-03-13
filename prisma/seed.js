// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import seedData from '../src/lib/data.json' assert {type:"json"}; // Assuming the data is in a file like data.json

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);

  for (const c of seedData) {
    console.log(`Processing course: ${c.title}`);
    const createdCourse = await prisma.course.create({
      data: {
        courseId: c.courseId,
        title: c.title,
        assessments: {
          create: c.assessments.map(assessment => ({
            title: assessment.title,
            grade: assessment.grade,
          })),
        },
      },
    });

    console.log(`Created course with id: ${createdCourse.cid}`);
  }

  console.log(`Seeding completed.`);
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
