import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = (async () => {
// 1.
const courses = await prisma.course.findMany({
  include: {assessments: true}
  })

// 2.
return { feed: courses };
}) satisfies PageServerLoad;

export const actions = {

  // 3.
  deleteCourse: async ({params: {slug}}) => {
      await prisma.course.delete({
          where: {cid: Number(slug) },
          include: {assessments:true}
      });

      throw redirect(303, '/')
  }
} satisfies Actions;