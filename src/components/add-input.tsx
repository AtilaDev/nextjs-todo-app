'use client';

import { ChangeEvent, useState } from 'react';
import { useFormState } from 'react-dom';
import { Input } from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from './form-button';

export default function AddInput() {
  const [task, setTask] = useState('');
  const [formState, action] = useFormState(actions.createTask, {
    message: '',
  });

  const handleSubmit = () => {
    setTask('');
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTask(value.charAt(0).toUpperCase() + value.slice(1));
  };

  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className='inline-flex items-center gap-2'>
        <Input
          type='text'
          name='newTask'
          label='Add some task'
          value={task}
          onChange={handleOnChange}
          size='sm'
          className='w-80'
          isInvalid={formState && formState.message ? true : false}
        />
        <FormButton>Add</FormButton>
      </div>
    </form>
  );
}
