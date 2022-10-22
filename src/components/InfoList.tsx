import styles from './InfoList.module.css';

interface InfoListProps {
  amountTaskCreated: number;
  amountTaskCompleted: number;
}

export function InfoList({ amountTaskCreated, amountTaskCompleted }: InfoListProps) {
  return (
    <div className={styles.infoList}>
      <div className={styles.createdList}>
        <strong>Tarefas criadas</strong>
        <span>{amountTaskCreated}</span>
      </div>
      <div className={styles.doneList}>
        <strong>Concluídas</strong>
        <span>{amountTaskCompleted} de {amountTaskCreated}</span>
      </div>
    </div>
  )
}