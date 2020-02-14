import { IGraphQLGroup } from '../type';
import queries from './queries';
import schemas from './schemas';

const typeDefs: IGraphQLGroup = {
    schemas,
    queries,
};

export default typeDefs;
