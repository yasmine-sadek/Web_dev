import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        let courseId = data.get("courseId")
        let title = data.get("title")

        // 2.
        if (!title || !courseId ) {
            return fail(400, { title, courseId, missing: true });
        }

        // 3.
        if (typeof title != "string" || typeof courseId != "string" ) {
            return fail(400, { incorrect: true })
        }

        // 4.
        await prisma.course.create({
            data: {
                courseId,
                title,
            },
        });

        //5.
        throw redirect(303, `/`)
    },

    
} satisfies Actions;





/* export const actions = {
    createCourse: async ({ request }) => {
      const formData = await request.formData();
      const courseId = formData.get('courseId');
      const title = formData.get('title');
      return { success: true };
    },
  }; */