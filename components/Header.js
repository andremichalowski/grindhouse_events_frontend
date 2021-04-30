import Link from 'next/link'
import styles from '../styles/Header.modules.css'


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Grindhouse Events</a>
        </Link>
      </div>
      
    </header>
  )
}
