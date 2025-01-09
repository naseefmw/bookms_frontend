const baseUrl = 'http://localhost:8080/gbooks/'

export default async function getGoogleBooksInfo(isbn) {
  const data = await fetch(`${baseUrl}${isbn}`)
  const bookInfo = await data.json()
  return bookInfo.items[0].volumeInfo
}
