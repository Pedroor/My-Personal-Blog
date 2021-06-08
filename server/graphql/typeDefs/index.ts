import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

export const typeDefsArray = loadFilesSync(
  path.join(__dirname, "./", "*.gql"),
  {
    ignoreIndex: true,
  }
);

export const typeDefs = mergeTypeDefs(typeDefsArray);
