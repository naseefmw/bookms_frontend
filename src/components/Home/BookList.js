'use client'
import BookItem from './BookItem'
import { Table, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import MyPagination from './Pagination'
import AddBooks from './AddBooks'

export default function BookList({ bookList, setBookList }) {
  const [page, setPage] = useState(1)
  const [booksCount, setBooksCount] = useState(0)
  const pageLimit = 10
  useEffect(() => {
    if (bookList) {
      setBooksCount(bookList.length)
      if (page > Math.ceil(bookList.length / pageLimit) && page > 1) {
        setPage(page - 1)
      }
    }
  }, [bookList])

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
  const handleChangePage = (p) => {
    setPage(p)
  }
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="titlecolumn">
              Title
              <Button variant="link" onClick={() => sortByTitle()}>
                ⇅
              </Button>
            </th>
            <th>
              Author{' '}
              <Button variant="link" onClick={() => sortByAuthor()}>
                ⇅
              </Button>
            </th>
            <th>
              ⭐{' '}
              <Button variant="link" onClick={() => sortByRating()}>
                ⇅
              </Button>
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookList
            ? bookList
                .slice(
                  (page - 1) * pageLimit,
                  (page - 1) * pageLimit + pageLimit < booksCount
                    ? (page - 1) * pageLimit + pageLimit
                    : booksCount
                )
                .map((book) => (
                  <BookItem
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    setBookList={setBookList}
                    bookList={bookList}
                  />
                ))
            : null}
        </tbody>
      </Table>
      <MyPagination
        N={booksCount}
        active={page}
        onChangePage={handleChangePage}
        pageLimit={pageLimit}
      />
    </div>
  )
}
