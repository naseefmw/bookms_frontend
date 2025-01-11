'use client'
import { Button, Form } from 'react-bootstrap'
import { gql } from '@apollo/client'
import { useState } from 'react'
import createApolloClient from '@/services/apollo-client'
import { useRouter } from 'next/navigation'

const ADD_BOOK = gql`
  mutation AddBook(
    $title: String!
    $author: String!
    $pub_date: Date!
    $isbn: String!
    $rating: Int!
    $genre: String
    $image: String
  ) {
    addBook(
      bookInput: {
        title: $title
        author: $author
        pub_date: $pub_date
        isbn: $isbn
        rating: $rating
        genre: $genre
        image: $image
      }
    ) {
      id
    }
  }
`

export default function BookForm({ close }) {
  const client = createApolloClient()
  const router = useRouter()
  const [validated, setValidated] = useState(false)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pub_date, setPubDate] = useState(
    new Date('2000-01-01').toISOString().slice(0, 10)
  )
  const [isbn, setIsbn] = useState(0)
  const [rating, setRating] = useState('3')
  const [genre, setGenre] = useState('')
  const [image, setImage] = useState('')

  async function onSubmit(event) {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    event.preventDefault()
    const { data } = await client.mutate({
      mutation: ADD_BOOK,
      variables: {
        title: title,
        author: author,
        pub_date: pub_date,
        isbn: isbn.toString(),
        rating: parseInt(rating),
        genre: genre,
        image: image,
      },
    })
    console.log(data)
    close()
    router.refresh()
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          minLength="1"
          maxLength="100"
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          required
          minLength="1"
          maxLength="50"
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Publication Date</Form.Label>
        <Form.Control
          required
          type="date"
          value={pub_date}
          onChange={({ target }) => setPubDate(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formIsbn">
        <Form.Label>ISBN</Form.Label>
        <Form.Control
          required
          min="1000000000000"
          max="9999999999999"
          type="number"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={({ target }) => setIsbn(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Range
          required
          min="1"
          max="5"
          value={rating}
          onChange={({ target }) => setRating(target.value)}
        />
        {rating}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGenre">
        <Form.Label>Genre</Form.Label>
        <Form.Select
          value={genre}
          onChange={({ target }) => setGenre(target.value)}
        >
          <option value="">Select genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLink">
        <Form.Label>Book Cover</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter image link"
          value={image}
          onChange={({ target }) => setImage(target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
  )
}
