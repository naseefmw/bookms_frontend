import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import getGoogleBooksInfo from '@/services/googlebooksapi'
import BookTitleCard from '@/components/Details/BookTitleCard'
import './book.css'
import BookTabs from '@/components/Details/BookTabs'
import { Button } from 'react-bootstrap'
import Link from 'next/link'

const BOOK_DETAILS = gql`
  query BookDetails($id: ID!) {
    bookById(id: $id) {
      title
      author
      pub_date
      isbn
      rating
      genre
      image
    }
  }
`
async function getBookDetails(id) {
  const client = createApolloClient()
  const { data } = await client.query({
    query: BOOK_DETAILS,
    variables: { id: id },
  })
  return data.bookById
}

export default async function BookDetails({ searchParams }) {
  const { id } = await searchParams
  const bookDetails = await getBookDetails(id)
  const moreDetails = await getGoogleBooksInfo(bookDetails.isbn)
  return (
    <>
      <div>
        <Link href={{ pathname: '/' }}>Back to BookList</Link>
      </div>
      <BookTitleCard title={bookDetails.title} image={bookDetails.image} />
      <BookTabs book={bookDetails} moreInfo={moreDetails} />
    </>
  )
}
