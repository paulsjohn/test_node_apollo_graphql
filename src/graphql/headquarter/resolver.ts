import { Query } from './headquarter.query';
import { HeadquarterMap } from "./headquarter.map";
import { Mutation } from "./headquarter.mutation";

export const resolver = {
  Query: Query,
  Headquarter: HeadquarterMap,
  Mutation: Mutation
};
