import { TaskProps } from '../App';
import styles from './Modal.module.css';

interface ModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  onDeleteTask: (taskID: string) => void;  
  taskId: string;
  taskTitle: string;
}

export function Modal({ modalIsOpen, setModalIsOpen, onDeleteTask, taskId, taskTitle }: ModalProps) {
  console.log(taskId)
  return (
    <div className={modalIsOpen === true ? styles.modal : styles.modalHidden }>
      <div>
        <section>
          <span>Deseja deletar a tarefa?</span>
          <span>{taskTitle}</span>
        </section>

        <footer>
          <button onClick={() => onDeleteTask(taskId)}>
            Deletar
          </button>
          <span></span>
          <button onClick={() => setModalIsOpen(false)}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  )
}