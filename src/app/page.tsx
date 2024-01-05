import { Divider } from '@nextui-org/react';
import { fetchAllTask } from '@/db/queries';
import TaskItem from '@/components/task-item';
import AddInput from '@/components/add-input';

export default async function HomePage() {
  const tasks = await fetchAllTask();
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  // throw new Error()

  const renderedTasks = tasks.map(async (task) => {
    return (
      <TaskItem
        key={task.id}
        id={task.id}
        title={task.title}
        completed={task.completed}
      />
    );
  });

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center'>
        <AddInput />
      </div>
      <Divider className='my-5 bg-slate-200' />
      <div className='flex flex-col justify-start ml-10'>
        {tasks.length !== 0 && (
          <div className='text-lg font-bold mb-5'>Tasks</div>
        )}
        <div className='px-4'>
          <div className='text-sm'>{renderedTasks}</div>
        </div>
      </div>
    </div>
  );
}
