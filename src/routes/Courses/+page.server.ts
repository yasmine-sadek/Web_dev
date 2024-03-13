import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const courses = await prisma.course.findMany({
  })

return { feed: courses };
}) satisfies PageServerLoad;



