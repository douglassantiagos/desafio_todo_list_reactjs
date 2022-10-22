import styles from './Withoutlist.module.css';
import Clipboard from '../assets/clipboard.svg'

export function Withoutlist() {
  return (
    <div className={styles.withoutList}>
      <span></span>
      <div>
        <img src={Clipboard} alt="Icon List" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>      
      </div>    
    </div>
  )
}