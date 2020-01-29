import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const shelves = {
  "currentlyReading": "Currently Reading",
  "wantToRead": "Want to Read",
  "read": "Read"
}

const Home = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>My Reads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {
          Object.keys(shelves).map(key => (
            <BookShelf
              key={key}
              title={shelves[key]}
              books={props.books.filter(b => b.shelf === key)}
              handleChange={props.handleChange} />
          ))
        }
      </div>
    </div>
    <div className="open-search">
      <Link to="/search" />
    </div>
  </div>
)

Home.propTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Home
