import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import { getAll, update, get } from './BooksAPI'
import { BrowserRouter, Route } from 'react-router-dom'

const BooksApp = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAll().then(books => { setBooks(books) })
  }, [])

  const handleChange = (bookId, newState) => {
    update({ id: bookId }, newState).then(async shelf => {
      const bookExistsOnShelf = books.some(b => b.id === bookId)
      if (bookExistsOnShelf) {
        setBooks(books.map(b => {
          if (b.id === bookId) b.shelf = newState
          return b
        }))
      }
      else {
        const newBook = await get(bookId)
        setBooks([...books, newBook])
      }
    })
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" render={() => (
          <Home books={books} handleChange={handleChange} />
        )} />
        <Route exact path="/search" render={() => (
          <Search booksOnShelf={books} handleChange={handleChange} />
        )} />
      </div>
    </BrowserRouter>
  )
}

export default BooksApp
