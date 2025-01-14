import BookList from '@/components/Home/BookList'
import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import AddBooks from '@/components/Home/AddBooks'
import './homepage.css'

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
      <h2 className="mainpagetitle">BookList</h2>
      <AddBooks />
      <BookList books={books} />
    </div>
  )
}
