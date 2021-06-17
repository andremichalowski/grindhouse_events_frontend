import FaExlamationTriangle from 'react-icons/fa'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import NextLink from 'next/link'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <FaExlamationTriangle />404</h1>
        <h4>Sorry there is nothing here.</h4>
        <NextLink href="/">Go Back Home</NextLink>
      </div>
    </Layout>
  )
}
