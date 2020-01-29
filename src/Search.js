import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import BooksGrid from './BooksGrid'

const Search = props => {
  const [books, setBooks] = useState([])
  const [searchText, setSearchText] = useState("")

  let onChangeTimer = null

  const handleSearchTextChange = (e) => {
    const searchText = e.target.value
    setSearchText(searchText)
    clearTimeout(onChangeTimer)
    onChangeTimer = setTimeout(() => {
      if (searchText) {
        search(searchText, 100).then(async res => {
      	  if (!res.error) {
            const books = res.map(item => {
              const shelfBook = props.booksOnShelf.find(sb => sb.id === item.id)
              item.shelf = shelfBook ? shelfBook.shelf : "none"
              return item
            })
            setBooks(books)
          } else {
            setBooks([])
          }
        })
      }
      else {
        setBooks([])
      }
    }, 500)
  }
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" />
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author" 
            value={searchText} 
            onChange={handleSearchTextChange} />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid books={books} handleChange={props.handleChange} />
      </div>
    </div>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  booksOnShelf: PropTypes.array.isRequired
}

export default Search
