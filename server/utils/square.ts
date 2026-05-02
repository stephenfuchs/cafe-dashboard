import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
} from "@apollo/client/core";

export const createSquareClient = () => {
    const runtimeConfig = useRuntimeConfig();

    const httpLink = new HttpLink({
        uri: "https://connect.squareup.com/public/graphql",
    });

    const authLink = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                Authorization: `Bearer ${runtimeConfig.squareApiSecret}`,
            },
        }));

        return forward(operation);
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};
