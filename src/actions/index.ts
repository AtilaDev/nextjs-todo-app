'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/db';

export async function createTask(
  formState: { message: string } | undefined,
  formData: FormData
) {
  try {
    const task = formData.get('newTask');

    if (typeof task !== 'string' || task.length < 3) {
      return {
        message: 'Task must be longer',
      };
    }

    await db.task.create({
      data: {
        title: task,
        completed: false,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }

  revalidatePath('/');
}

export async function updateTask(id: number, completed: boolean) {
  try {
    await db.task.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }

  revalidatePath('/');
}
