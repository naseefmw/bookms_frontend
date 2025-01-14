'use client'
import Link from 'next/link'
import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`

export default function BookItem({
  id,
  title,
  author,
  rating,
  setBookList,
  bookList,
}) {
  const client = createApolloClient()

  async function onDelete(event) {
    event.preventDefault()
    const { data } = await client.mutate({
      mutation: DELETE_BOOK,
      variables: {
        id: id,
      },
    })
    const deletedId = data.deleteBook.id
    setBookList(bookList.filter((book) => book.id !== deletedId))
  }
  return (
    <tr>
      <td>
        <Link
          href={{
            pathname: '/bookdetails',
            query: { id: id },
          }}
        >
          {title}
        </Link>
      </td>
      <td>{author}</td>
      <td>{rating}</td>
      <td>
        <Button variant="danger" onClick={onDelete}>
          🗑️
        </Button>
      </td>
    </tr>
  )
}
