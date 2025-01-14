'use client'
import { Tab, Tabs, Image } from 'react-bootstrap'

export default function BookTabs({ book, moreInfo }) {
  return (
    <Tabs
      defaultActiveKey="about"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="about" title="About">
        <h5 className="bookdetails">
          Author <strong>{book.author} </strong> <br />
          Publication Date
          <strong>{new Date(book.pub_date).toLocaleDateString('en-GB')}</strong>
          <br />
          ISBN <strong>{book.isbn}</strong> <br />
          Rating <strong>{book.rating}</strong>
          <br />
          Genre <strong>{book.genre}</strong>
        </h5>
      </Tab>
      <Tab eventKey="moreInfo" title="More Details">
        {moreInfo.title ? (
          <>
            <Image
              id="largecover"
              src={moreInfo.imageLinks ? moreInfo.imageLinks.thumbnail : null}
              alt="Book cover"
            />
            <p className="moreinfo">
              Title: {moreInfo.title} <br />
              Authors: {moreInfo.authors ? moreInfo.authors.join() : null}{' '}
              <br />
              Publisher: {moreInfo.publisher} <br />
              Published Date:{' '}
              {new Date(moreInfo.publishedDate).toLocaleDateString('en-GB')}
              <br />
              Description: {moreInfo.description} <br />
              Page Count: {moreInfo.pageCount} <br />
              Average Rating: {moreInfo.averageRating} <br />
              Categories:{' '}
              {moreInfo.categories ? moreInfo.categories.join() : null}
            </p>
            <p className="src">Source: Google Books</p>
          </>
        ) : (
          moreInfo.error
        )}
      </Tab>
    </Tabs>
  )
}
