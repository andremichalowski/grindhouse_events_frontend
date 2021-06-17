import NextLink from 'next/link'
import {useContext} from 'react'
import AuthContext from '@/context/AuthContext'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import styles from '@/styles/DashboardEvent.module.css'

export default function DashboardEvent({ evt, handleDelete }) {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <div className={styles.event}>
      <h4>
        <NextLink href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </NextLink>
      </h4>
      {!user ? (
        <h4 style="text-color: gray"> Login to create and edit events. </h4>
      ) : ( 
        <div>
          <NextLink href={`/events/edit/${evt.id}`}>
            <a className={styles.edit}>
              <FaPencilAlt /> <span>Edit Event</span>
            </a>
          </NextLink>
          <a
            href='#'
            className={styles.delete}
            onClick={() => handleDelete(evt.id)}
          >
            <FaTimes /> <span>Delete</span>
          </a>
        </div>
      )}
    </div>
  )
}