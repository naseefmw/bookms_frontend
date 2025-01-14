'use client'
import { Image } from 'react-bootstrap'

export default function BookTitleCard({ title, image }) {
  return (
    <div className="booktitle">
      {image ? <Image id="cover" src={image} alt="Book cover" /> : null}

      <h2 className="title">{title}</h2>
    </div>
  )
}
