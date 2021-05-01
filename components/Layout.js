import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Showcase from './Showcase'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'
export default function Layout({title, keywords, description, children}) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      
      <Header />

      { router.pathname === '/' && <Showcase /> }

      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Grindhouse Events | Find the hottest hip-hop parties and events',
  description: 'Find the latest Hip-Hop and related events',
  keywords: 'music, hip-hop, beats, events'

}
