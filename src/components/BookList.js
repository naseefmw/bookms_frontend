import BookItem from './BookItem'

export default function BookList(books) {
  const booklist = books.books
  console.log(booklist)

  return (
    <div>
      <BookItem />
      <BookItem />
      <BookItem />
    </div>
  )
}
