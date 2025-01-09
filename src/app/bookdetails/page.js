import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import getGoogleBooksInfo from '@/services/googlebooksapi'

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
        title: {bookDetails.title} <br />
        author: {bookDetails.author} <br />
        pub_date: {bookDetails.pub_date} <br />
        isbn: {bookDetails.isbn} <br />
        rating: {bookDetails.rating}
        <br />
        genre: {bookDetails.genre}
        <br />
        image: {bookDetails.image}
      </div>
      <br />
      <div>
        More Details
        <br />
        {moreDetails.description}
      </div>
    </>
  )
}
