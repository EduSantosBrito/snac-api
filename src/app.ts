import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import schema from './GraphQL';

class App {
    private app: express.Application;

    private server: ApolloServer;

    constructor() {
        this.app = express();
        this.config();
        this.server = new ApolloServer({
            schema,
            validationRules: [depthLimit(7)],
        });
        this.server.applyMiddleware({ app: this.app, path: '/graphql' });
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.text({ type: 'application/graphql' }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use('*', cors());
        this.app.use(compression());
    }

    listen() {
        const port: number = Number(process.env.PORT) || 3000;
        const httpServer = createServer(this.app);
        httpServer.listen(port, async () => {
            try {
                // eslint-disable-next-line no-console
                console.log(`Server started at http://localhost:${port}`);
            } catch (error) {
                throw new Error(error);
            }
        });
    }
}

export default new App();
