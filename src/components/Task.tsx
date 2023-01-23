import { IconCheck, IconTrash } from '@vtex/phosphor-icons';

import styles from './Task.module.css';
import { TaskProps } from '../App';
import { Modal } from './Modal';
import { useState } from 'react';

interface Props {
  task: TaskProps[];
  onCompleteTask: (taskID: string) => void;
  onDeleteTask: (taskID: string) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask, modalIsOpen, setModalIsOpen }: Props) {  
  return (
    <>     
      {task.map(task => {
        return (
          <> 
            <div key={task.id} className={styles.taskList}>
              <div className={styles.task}>
                <div>
                  {task.isCompleted === true ? (
                    <button onClick={() => onCompleteTask(task.id)} title='Desmarcar tarefa como concluída'>               
                      <IconCheck />
                    </button>
                  ) : (
                    <button onClick={() => onCompleteTask(task.id)} title='Marcar tarefa como concluída'>               
                      <span></span>
                    </button>
                  )}
                  <p className={task.isCompleted === true ? styles.textTaskDone : ''}>{task.title}</p>
                </div>
                <button onClick={() => setModalIsOpen(true)} title='Deletar tarefa'>
                  <IconTrash />
                </button>
              </div>                
            </div>
            <Modal
              modalIsOpen={modalIsOpen} 
              setModalIsOpen={setModalIsOpen} 
              onDeleteTask={onDeleteTask}
              taskId={task.id}
              taskTitle={task.title}
            />          
          </>
        )
      })}
    </>
  )
}
