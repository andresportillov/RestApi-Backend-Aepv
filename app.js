import express from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schema/schema';
import resolver from './resolvers/resolver';
import { connect } from './databases'
import cors from 'cors'

const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(cors())
connect();

app.use(
    '/graphqlTest', graphqlHttp({
        graphiql: true,
        schema: schema,
        rootValue: resolver,
        context: {
            message: 'Test Andres'
        }
    })
);

app.listen('3045', () => console.log('port 3045'));