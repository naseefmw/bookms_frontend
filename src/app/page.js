import BookList from '@/components/Home/BookList'
import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import AddBooks from '@/components/Home/AddBooks'

const FIND_BOOKS = gql`
  query BookList {
    findAllBooks {
      id
      title
      author
      rating
    }
  }
`
async function getBookList() {
  const client = createApolloClient()
  const { data } = await client.query({
    query: FIND_BOOKS,
  })
  return data.findAllBooks
}

export default async function Home() {
  const books = await getBookList()
  return (
    <div>
      <AddBooks />
      <BookList books={books} />
    </div>
  )
}
