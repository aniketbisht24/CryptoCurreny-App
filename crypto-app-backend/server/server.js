
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
// const Authentication = require('smart-auth-middleware');
const { buildFederatedSchema } = require('@apollo/federation');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginInlineTraceDisabled } = require('apollo-server-core');

const { default: responseCachePlugin } = require('apollo-server-plugin-response-cache');

const SmartHttp = require('smart-http');

const { typeDefs, resolvers } = require('./graphql');

const routes = require('./routes');

const { PORT } = require('./config');

const app = express();

const schema = buildFederatedSchema({
  typeDefs,
  resolvers,
});

/**
 * Start the app by listening <port>
 * */
const server = app.listen(PORT);

/**
 * List of all middlewares used in project cors, compression, helmet
 * */
try {
  // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  app.enable('trust proxy');
  app.use(SmartHttp());

  app.use(cors({
    exposedHeaders: [ 'message', 'x-coreplatform-paging-limit', 'x-coreplatform-total-records' ],
  }));
  app.use(compression());
  app.use(helmet());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(express.json());

  // app.use(Authentication({
  //   IDENTITY_

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({
      user: req && req.user,
      headers: req.headers,
    }),
    plugins: [ ApolloServerPluginInlineTraceDisabled(), responseCachePlugin() ],
  });

  app.use('/', routes);

  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app, path: '/graphql' });
  });
} catch (e) {
  server.close();
}

module.exports = server;
