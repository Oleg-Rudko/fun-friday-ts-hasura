import { HttpLink } from "apollo-link-http";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const makeApolloClient = () => {
  const link = new HttpLink({
    uri: "https://fun-friday-ts-hasura.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "bYbGp932HpLDL8QV54ysRrusW54d6Ek6onqBMdn9oHB6nnyJRjGQBOW7C9SNcXWg",
    },
  });
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
};

export default makeApolloClient;
