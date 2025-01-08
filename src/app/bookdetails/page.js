export default async function BookDetails({ searchParams }) {
  const { id } = await searchParams
  return <div>book details of {id}</div>
}
