import { IconCheck, IconTrash } from '@vtex/phosphor-icons';

import styles from './Task.module.css';
import { TaskProps } from '../App';

interface Props {
  task: TaskProps[];
  onDeleteTask: (taskID: string) => void;
  onCompleteTask: (taskID: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: Props) {
  return (
    <>     
      {task.map(task => {
        return (
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
              <button onClick={() => onDeleteTask(task.id)} title='Deletar tarefa'>
                <IconTrash />
              </button>            
            </div>
          </div>
        )
      })}    
    </>
  )
}
