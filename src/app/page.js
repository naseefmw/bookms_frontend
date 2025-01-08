import styles from './page.module.css'
import BookList from '@/components/BookList'
import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'

async function getBookList() {
  const client = createApolloClient()
  const { data } = await client.query({
    query: gql`
      query BookList {
        findAllBooks {
          id
          title
          author
        }
      }
    `,
  })

  return data.findAllBooks
}

export default async function Home() {
  const books = await getBookList()
  return (
    <div className={styles.page}>
      <BookList books={books} />
    </div>
  )
}
