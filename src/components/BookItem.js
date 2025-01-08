import Link from 'next/link'
export default function BookItem({ id, title, author }) {
  return (
    <div>
      <Link
        href={{
          pathname: '/bookdetails',
          query: { id: id },
        }}
      >
        {title} - {author}
      </Link>
    </div>
  )
}
