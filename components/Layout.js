import Head from 'next/head'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Grindhouse Events | Find the hottest hip-hop parties and events',
  description: 'Find the latest Hip-Hop and related events',
  keywords: 'music, hip-hop, beats, events'

}
