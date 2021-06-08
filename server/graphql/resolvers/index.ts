import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

export const resolversArray = loadFilesSync(path.join(__dirname, "./"), {
  ignoreIndex: true,
});

export const resolvers = mergeResolvers(resolversArray);
