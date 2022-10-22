import styles from './Header.module.css';
import logoToDo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logoToDo} alt="Logo ToDo" />
      </a>
    </header>
  )
}