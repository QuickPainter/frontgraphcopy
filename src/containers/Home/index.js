import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_AUTHORS, GET_BOOKS } from './graphql'

const Home = () => {
  const { loading: authorsLoading, error: authorsError, data: authorsData } = useQuery(GET_AUTHORS)
  const { loading: booksLoading, error: booksError, data: booksData } = useQuery(GET_BOOKS)

  if (authorsLoading) return 'Loading Authors...'
  if (authorsError) return `Error: ${authorsError}`
  if (booksLoading) return 'Loading Books...'
  if (booksError) return `Error: ${booksError}`

  console.log(`Blah: ${authorsData}`)
  return (
    <div>
    <p>Pick an author!</p>
    <select>   
      {authorsData.allAuthors.map(author => (
        <option key={author.id} value={author.firstName}>
          {author.firstName}
        </option>
      ))}
    </select>
    <p>Pick a Book!</p>
    <select>   
      {booksData.allBooks.map(book => (
        <option key={book.id} value={book.title}>
          {book.title}
        </option>
      ))}
    </select>
    </div>
  )
}

export default Home

