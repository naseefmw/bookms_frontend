const API_URL = process.env.NEXT_PUBLIC_API_URL
const baseUrl = `${API_URL}/gbooks/`

export default async function getGoogleBooksInfo(isbn) {
  const data = await fetch(`${baseUrl}${isbn}`)

  try {
    const bookInfo = await data.json()
    const result = bookInfo.items[0].volumeInfo
    return result
  } catch (e) {
    return { error: 'Invalid ISBN' }
  }
}
