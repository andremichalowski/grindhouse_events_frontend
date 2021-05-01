import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p> Copyright &copy; Grindhouse Events 2021 </p>
      <p>Footer</p> 
      <Link href="/about">About Grindhouse</Link>
    </footer>
  )
}
