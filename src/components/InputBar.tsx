import { IconPlusCircle } from '@vtex/phosphor-icons';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './InputBar.module.css';

interface InputBarProps {
  handleCreateNewTask: (title: string) => void;
}

export function InputBar({ handleCreateNewTask }: InputBarProps) {
  const [taskTitle, setTaskTitle] = useState("");
  
  function handleNewToDoListChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setTaskTitle(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    handleCreateNewTask(taskTitle);
    setTaskTitle('');
  }

  function handleNewToDoListInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha o campo para adicionar uma nova tarefa.')
  }

  return (
      <form onSubmit={handleSubmit} className={styles.input}>
        <input
          name='task'
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewToDoListChange}
          onInvalid={handleNewToDoListInvalid}
          value={taskTitle}
          required     
        />
        <button type='submit' title='Criar tarefa'>
          Criar
          <IconPlusCircle />
        </button>
      </form>
    )
}