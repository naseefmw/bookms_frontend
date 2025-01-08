import BookItem from './BookItem'

export default function BookList(books) {
  const bookList = books.books

  return (
    <div>
      {bookList.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  )
}
