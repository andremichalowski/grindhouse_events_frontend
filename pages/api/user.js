import cookie from 'cookie'
import {API_URL} from '@/config/index'

// middleman for strapi
export default async (req, res) => {
  if(req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({message: 'Not Authroized'})
      return
    }

    const {token} = cookie.parse(req.headers.cookie) //deconstruct token from parsed cookie

    const strapiRes = await fetch(`${API_URL}/users/me`, { //send that token 
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const user = await strapiRes.json()
    if(strapiRes.ok) {
      res.status(200).json({ user })
    } else {
      res.status(403).json({ message: 'User forbidden' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}