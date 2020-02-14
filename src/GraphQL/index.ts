import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes } from 'merge-graphql-schemas';
import HelloWorld from './HelloWorld';

const typeDefs = mergeTypes([HelloWorld.schemas]);
const resolvers = {
    Query: {
        ...HelloWorld.queries,
    },
};

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
