'use client'
import BookItem from './BookItem'
import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import MyPagination from './Pagination'

export default function BookList(books) {
  useEffect(() => {
    setBookList(books.books)
  }, [books])
  const [bookList, setBookList] = useState(books.books)
  const [asc, setAsc] = useState(1)

  const sortByTitle = () => {
    const sorted = asc
      ? [...bookList].sort((a, b) => {
          const A = a.title.toUpperCase()
          const B = b.title.toUpperCase()
          if (A < B) {
            return -1
          }
          if (A > B) {
            return 1
          }
          return 0
        })
      : [...bookList].sort((a, b) => {
          const B = a.title.toUpperCase()
          const A = b.title.toUpperCase()
          if (A < B) {
            return -1
          }
          if (A > B) {
            return 1
          }
          return 0
        })
    setAsc(!asc)
    setBookList(sorted)
  }

  const sortByAuthor = () => {
    const sorted = asc
      ? [...bookList].sort((a, b) => {
          const A = a.author.toUpperCase()
          const B = b.author.toUpperCase()
          if (A < B) {
            return -1
          }
          if (A > B) {
            return 1
          }
          return 0
        })
      : [...bookList].sort((a, b) => {
          const B = a.author.toUpperCase()
          const A = b.author.toUpperCase()
          if (A < B) {
            return -1
          }
          if (A > B) {
            return 1
          }
          return 0
        })
    setAsc(!asc)
    setBookList(sorted)
  }

  const sortByRating = () => {
    const sorted = asc
      ? [...bookList].sort((a, b) => a.rating - b.rating)
      : [...bookList].sort((a, b) => b.rating - a.rating)

    setAsc(!asc)
    setBookList(sorted)
  }

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>
              Title
              <Button onClick={() => sortByTitle()}>⇅</Button>
            </th>
            <th>
              Author <Button onClick={() => sortByAuthor()}>⇅</Button>
            </th>
            <th>
              Rating <Button onClick={() => sortByRating()}>⇅</Button>
            </th>
            <th>🗑️</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
            />
          ))}
        </tbody>
      </Table>
      <MyPagination />
    </div>
  )
}
