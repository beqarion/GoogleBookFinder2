import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import _ from 'lodash'
import Search from './components/search'
import Books from './components/books'
import Navbar from './components/navbar'
import Favorites from './components/favorites'
import Details from './components/details'
import LoginForm from './components/loginForm'
import './css/App.css';



const url = 'https://www.googleapis.com/books/v1/volumes?q='


function App() {

  const [keyword, setKeyword] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const handleInput = (e) => {
    setKeyword(e.currentTarget.value)
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    const uri = url + keyword
    if (!/\S/.test(keyword)) return
    setKeyword('')
    setLoading(true)
    const response = await fetch(uri)
    const data = await response.json()
    setBooks(data.items)
    setLoading(false)
    console.log(data.items)
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
    <React.Fragment>
      <Navbar />
      <main className="main-container">
        <Switch>

          <Route path="/favorites" render={props =>
            <Favorites
              {...props}
              books={books}
              handleLike={handleLike}
            />
          } />

          <Route path="/" exact render={props =>
            <React.Fragment>
              <Search
                handleChange={handleInput}
                handleSubmit={handleSearch}
                keyword={keyword}
                {...props}
              />
              <Books
                books={books}
                handleLike={handleLike}
                loading={loading}
                {...props}
              />
            </React.Fragment>
          } />
          <Route path="/details/:id" render={props =>
            <Details {...props} books={books} handleLike={handleLike} />
          } />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
