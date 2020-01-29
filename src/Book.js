import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  const [value, setValue] = useState(props.shelf)

  const handleChange = event => {
    props.handleChange(props.bookId, event.target.value)
    setValue(event.target.value)
  }
  
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+props.bookCover+'")' }}></div>
          <div className="book-shelf-changer">
            <select onChange={handleChange} value={value}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors.join(", ")}</div>
    </div>
  )
}

Book.propTypes = {
  bookCover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  bookId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
}

export default Book
