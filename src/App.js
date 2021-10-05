import Search from './components/search'
import Books from './components/books'
import React, { useState } from 'react'
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

  return (
    <div className="container p-5">
      <Search
        handleChange={handleInput}
        handleSubmit={handleSearch}
        keyword={keyword}
      />
      <Books
        books={books}
      />
    </div>
  );
}

export default App;
