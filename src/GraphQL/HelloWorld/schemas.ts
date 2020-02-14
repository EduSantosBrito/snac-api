import { gql } from 'apollo-server-express';

const schemas = gql`
    type Query {
        helloWorld: String!
    }
`;

export default schemas;
