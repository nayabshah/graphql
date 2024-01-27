const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const app = express();
var { buildSchema } = require("graphql");
const schema = require("./schema/schema");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, console.log("Listening"));
