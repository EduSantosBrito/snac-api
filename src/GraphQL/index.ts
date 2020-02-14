import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes } from 'merge-graphql-schemas';
import IpChecker from './IpChecker';

const typeDefs = mergeTypes([IpChecker.schemas]);
const resolvers = {
    Query: {
        ...IpChecker.queries,
    },
};

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
