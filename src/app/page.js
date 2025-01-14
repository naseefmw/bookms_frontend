'use client'
import BookList from '@/components/Home/BookList'
import { gql } from '@apollo/client'
import createApolloClient from '@/services/apollo-client'
import './homepage.css'
import { useEffect, useState } from 'react'
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
  const result = data.findAllBooks
  return result
}

export default function Home() {
  const [bookList, setBookList] = useState([])
  useEffect(() => {
    getBookList().then((books) => {
      setBookList(books)
    })
  }, [])
  //console.log(bookList)
  return (
    <div>
      <h2 className="mainpagetitle">BookList</h2>
      <AddBooks setBookList={setBookList} bookList={bookList} />
      <BookList bookList={bookList} setBookList={setBookList} />
    </div>
  )
}
