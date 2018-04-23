import 'now-env';
import micro, { send } from 'micro';
import { get, post, router } from 'microrouter';
import { microGraphiql, microGraphql } from 'apollo-server-micro';

// graphql schema
import schema from './data/schema';

/**
 * SHINAR CONFIG
 */
const SHINAR_PORT = process.env.SHINAR_PORT || 3005;

/**
 * GRAPHQL STUFF
 */
const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/api' });

const shinar = micro(
  router(
    get('/api', graphqlHandler),
    post('/api', graphqlHandler),
    get('/api/sight', graphiqlHandler),
    (req, res) => send(res, 404, 'Not Found'),
  ),
);

shinar.listen(SHINAR_PORT);
