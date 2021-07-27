import express from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schema/schema';
import { connect } from './databases'

const app = express();

connect();

app.use(
    '/graphqlTest', graphqlHttp({
      graphiql: true,
      schema: schema,
      context: {
          message: 'Test Andres'
      }
    })
  );

app.listen('3045', () => console.log('port 3045'));