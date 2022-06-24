import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rs63xs1jf401yy4sazd4go/master',
    cache: new InMemoryCache()
})