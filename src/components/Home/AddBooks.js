'use client'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BookForm from './BookForm'

export default function AddBooks() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button onClick={handleShow}>Add Book</Button>
      <Modal show={show} onHide={handleClose} fullscreen="md-down" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookForm close={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
