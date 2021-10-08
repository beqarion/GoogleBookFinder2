import React, { useState } from 'react'
import _ from 'lodash'
import Search from './components/search'
import Books from './components/books'
import './App.css';



const url = 'https://www.googleapis.com/books/v1/volumes?q='


function App() {

  const [keyword, setKeyword] = useState('')
  const [books, setBooks] = useState([])

  const handleInput = (e) => {
    setKeyword(e.currentTarget.value)
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    const uri = url + keyword
    if (keyword === '') return
    setKeyword('')
    const response = await fetch(uri)
    const data = await response.json()
    setBooks(data.items)
    console.log(data)
  }
  const handleLike = (book) => {
    let copyBooks = []
    let index
    if ((index = books.indexOf(book)) > -1) {
      copyBooks = _.cloneDeep(books)
      copyBooks[index].liked = !copyBooks[index].liked
    }
    setBooks(copyBooks)
  }

  return (
    <div className="container p-5" >
      <Search
        handleChange={handleInput}
        handleSubmit={handleSearch}
        keyword={keyword}
      />
      <Books
        books={books}
        handleLike={handleLike}
      />
    </div>
  );
}

export default App;
