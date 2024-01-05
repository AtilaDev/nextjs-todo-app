'use client';

import { useFormState } from 'react-dom';
import { Input } from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from './form-button';
import { useState } from 'react';

export default function AddInput() {
  const [task, setTask] = useState('');
  const [formState, action] = useFormState(actions.createTask, {
    message: '',
  });

  const handleSubmit = () => {
    setTask('');
  };

  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className='inline-flex items-center gap-2'>
        <Input
          type='text'
          name='newTask'
          label='Add some task'
          value={task}
          onChange={(value) => setTask(value.target.value)}
          size='sm'
          className='w-80'
          isInvalid={formState && formState.message ? true : false}
        />
        <FormButton>Add</FormButton>
      </div>
    </form>
  );
}
