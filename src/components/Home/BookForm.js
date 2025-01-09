import { Button, Form } from 'react-bootstrap'

export default function BookForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter book title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Publication Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formIsbn">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="number" placeholder="Enter ISBN" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Range min="1" max="5" />5
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGenre">
        <Form.Label>Genre</Form.Label>
        <Form.Select>
          <option value="">None</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Mystery</option>
          <option>Fantasy</option>
          <option>Romance</option>
          <option>Sci-Fi</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLink">
        <Form.Label>Book Cover</Form.Label>
        <Form.Control type="url" placeholder="Enter image link" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
  )
}
