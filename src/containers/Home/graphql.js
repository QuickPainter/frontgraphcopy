import gql from 'graphql-tag'

export const GET_AUTHORS = gql`
    query allAuthors{
        allAuthors{
        firstName
  }
}
`

export const GET_BOOKS = gql`
    query allBooks {
        allBooks {
          title
          id
          authorId
          datePublished
          author {
            firstName
          }
        }
      }
`

export const ADD_BOOK = gql`
    mutation addBook($added:AddBookInput!) {
        addBook(input: $added) {
        title
        language
        numPages
        authorId
        publisherId
        bestseller   
    }
}
`