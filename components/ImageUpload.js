import { useState } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
// import Router from 'next/router'


export default function ImageUpload({ evtId, imageUploaded, token }) {
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'events')
    formData.append('refId', evtId)
    formData.append('field', 'image')
    // console.log('formData')
    
    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData
    })
    
    if(!res.ok) {
      console.log('Issue with res for imageUploaded')
    } else {
      imageUploaded()
      // alert('Image uploaded', formData)
      // console.log('Image response is ok')
      // router.push(`${API_URL}/events/${evtId}`)
    }
  }
  
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className='btn' />
      </form>
    </div>
  )
}
