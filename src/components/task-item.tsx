'use client';

import { Checkbox, Chip } from '@nextui-org/react';
import type { Task } from '@prisma/client';
import * as actions from '@/actions';

export default function TaskItem({ id, title, completed }: Task) {
  const handleCheck = async () => {
    await actions.updateTask(id, !completed);
  };

  return (
    <div className='flex items-center justify-between max-w-2xl mb-2'>
      <div className='flex items-center gap-3'>
        <Checkbox
          checked={completed}
          defaultSelected={completed}
          onChange={handleCheck}
        />
        <div
          className={`text-medium mr-28 md:mr-80 ${
            completed ? 'line-through text-slate-400' : ''
          }`}
        >
          {title}
        </div>
      </div>
      <Chip
        color={`${completed ? 'success' : 'warning'}`}
        className={'cursor-pointer text-white w-32'}
      >
        {completed ? 'Completed' : 'Pending'}
      </Chip>
    </div>
  );
}
