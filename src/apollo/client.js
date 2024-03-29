import ApolloClient from "apollo-client";
import fetch from "isomorphic-fetch";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = createHttpLink({
  uri: `${process.env.GATSBY_CAMPAIGN_API_URL}`,
  credentials: "include"
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  fetch
});
