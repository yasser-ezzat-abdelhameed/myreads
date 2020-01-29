import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = props => (
  <ol className="books-grid">
    {
      props.books.filter(b => b.imageLinks && b.imageLinks.thumbnail)
      .map(b => (
        <li key={b.id}>
          <Book 
            bookCover={b.imageLinks.thumbnail} 
            title={b.title} 
            authors={b.authors || []} 
            handleChange={props.handleChange} 
            bookId={b.id} 
            shelf={b.shelf || "none"} />
        </li>
      ))
    }
  </ol>
)

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default BooksGrid
