'use client'
import Link from 'next/link'
import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import { Button } from 'react-bootstrap'

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      title
    }
  }
`

export default function BookItem({ id, title, author, rating }) {
  const client = createApolloClient()

  async function onDelete(event) {
    event.preventDefault()
    const { data } = await client.mutate({
      mutation: DELETE_BOOK,
      variables: {
        id: id,
      },
    })
    console.log(data)
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
          Delete
        </Button>
      </td>
    </tr>
  )
}
