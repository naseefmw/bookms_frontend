import { ApolloClient, InMemoryCache } from '@apollo/client'
const API_URL = process.env.NEXT_PUBLIC_API_URL

const createApolloClient = () => {
  return new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
