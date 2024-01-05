import type { Task } from '@prisma/client';
import { db } from '@/db';

export function fetchAllTask(): Promise<Task[]> {
  return db.task.findMany();
}
