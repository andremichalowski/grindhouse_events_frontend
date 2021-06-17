import {FaPencilAlt, FaTimes} from 'react-icons/fa'
import NextLink from 'next/link'
import Image from 'next/image'
import {Router, useRouter} from 'next/router'
import Layout from '@/components/Layout'
import EventMap from '@/components/EventMap'
import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import { toast } from 'react-toastify'

export default function EventPage({ evt }) {
  console.log({evt})
  const router = useRouter()
  const deleteEvent = async (e) => {
    if(confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: 'DELETE'
      })
      
      const data = await res.json()

      if(!res.ok) {
        toast.error(data.message)
      } else {
        router.push('/events')
      }
    }
  }

  return (
    <Layout >
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image.formats.medium ? evt.image.formats.medium.url : evt.image.formats.thumbnail.url } width={960} height={600} />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <EventMap evt={evt} />

        <Link href="/events">
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}


export async function getServerSideProps({query: {slug}}) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0],
    },
  }
}