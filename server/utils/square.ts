import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

const runtimeConfig = useRuntimeConfig();

const httpLink = new HttpLink({
    uri: "https://connect.squareup.com/public/graphql",
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        Authorization: `Bearer ${runtimeConfig.squareApiSecret}`,
    },
}));

export const squareClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
