import styles from './ListEmpty.module.css';
import Clipboard from '../assets/clipboard.svg'

export function ListEmpty() {
  return (
    <div className={styles.listEmpty}>
      <span></span>
      <div>
        <img src={Clipboard} alt="Icon List" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>      
      </div>    
    </div>
  )
}