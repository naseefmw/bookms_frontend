import BookItem from './BookItem'
import { Table } from 'react-bootstrap'

export default function BookList(books) {
  const bookList = books.books
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
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
    </div>
  )
}
