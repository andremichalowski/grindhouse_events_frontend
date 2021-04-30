import Head from 'next/head'
import styles from '../styles/Layout.module.css'
export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Grindhouse Events | Find the hottest hip-hop parties and events',
  description: 'Find the latest Hip-Hop and related events',
  keywords: 'music, hip-hop, beats, events'

}