import AddInput from '@/components/add-input';
import { Divider } from '@nextui-org/react';
import { fetchAllTask } from '@/db/queries';

export default async function HomePage() {
  const tasks = await fetchAllTask();

  const renderedTasks = tasks.map((task) => (
    <div key={task.id}>{task.title}</div>
  ));

  return (
    <>
      <div className='flex justify-center'>
        <AddInput />
      </div>
      <Divider className='my-5 bg-slate-200' />
      <div className='flex flex-col justify-start ml-10'>
        <div className='text-lg font-bold mb-5'>Tasks</div>
        <div className='px-4'>
          <div className='text-sm'>{renderedTasks}</div>
        </div>
      </div>
    </>
  );
}
