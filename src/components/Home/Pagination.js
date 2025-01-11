import { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

export default function MyPagination({ N, active, onChangePage, pageLimit }) {
  let items = []
  if (active > 1) {
    items.push(
      <Pagination.Prev key="prev" onClick={() => onChangePage(active - 1)} />
    )
  } else {
    items.push(<Pagination.Prev key="prev" disabled />)
  }
  const pages = [...Array(Math.ceil(N / pageLimit)).keys()].map((i) => i + 1)
  pages.map((i) =>
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => onChangePage(i)}
      >
        {i}
      </Pagination.Item>
    )
  )

  if (active < pages.at(-1)) {
    items.push(
      <Pagination.Next key="next" onClick={() => onChangePage(active + 1)} />
    )
  } else {
    items.push(<Pagination.Next key="next" disabled />)
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )
}
