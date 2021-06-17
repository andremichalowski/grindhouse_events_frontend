import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import {useContext} from 'react'
import NextLink from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const { user, logout } = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NextLink href='/'>
          <a>Grindhouse Events</a>
        </NextLink>
      </div>
      
      <Search />

      <nav>
        <ul>
          <li>
            <NextLink href='/events'>
              <a>Events</a>
            </NextLink>
          </li>
          {user ? (
            <>
              {/* User logged in */}
              <li>
                <NextLink href='/events/add'>
                  <a>Add Event</a>
                </NextLink>
              </li>
              <li>
                <NextLink href='/account/dashboard'>
                  <a>Dashboard</a>
                </NextLink>
              </li>
              <li>
                <button onClick={() => logout()} className="btn-secondary btn-icon">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
           ) : ( 
            <>
              {/* User is logged out/no-user */}
              <li>
                <NextLink href='/account/login'>
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt />Login
                  </a>
                </NextLink>
              </li>
            </>
           )}
        </ul>
      </nav>
    </header>
  )
}
