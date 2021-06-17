import NextLink from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/DashboardEvent.module.css'

export default function DashboardEvent({ evt, handleDelete }) {
  return (
    <div className={styles.event}>
      <h4>
        <NextLink href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <NextLink href={`/events/edit/${evt.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <a
        href='#'
        className={styles.delete}
        onClick={() => handleDelete(evt.id)}
      >
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  )
}