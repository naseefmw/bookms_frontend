import Link from 'next/link'
export default function BookItem({ id, title, author, rating }) {
  return (
    <tr>
      <td>
        <Link
          href={{
            pathname: '/bookdetails',
            query: { id: id },
          }}
        >
          {title}
        </Link>
      </td>
      <td>{author}</td>
      <td>{rating}</td>
      <td>delete</td>
    </tr>
  )
}
