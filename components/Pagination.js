import NextLink from 'next/link'
import { PER_PAGE } from '@/config/index'

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE)
  return (
    <>
      {page > 1 && (
        <NextLink href={`/events?page=${page - 1}`}>
          <a className='btn-secondary'>Prev</a>
        </NextLink>
      )}

      {page < lastPage && (
        <NextLink href={`/events?page=${page + 1}`}>
          <a className='btn-secondary'>Next</a>
        </NextLink>
      )}
    </>
  )
}
