const API_URL = process.env.API_URL
const baseUrl = `${API_URL}/gbooks/`

export default async function getGoogleBooksInfo(isbn) {
  const data = await fetch(`${baseUrl}${isbn}`)

  try {
    const bookInfo = await data.json()
    return bookInfo.items[0].volumeInfo
  } catch (e) {
    console.log(e)
    return { error: 'Invalid ISBN' }
  }
}
