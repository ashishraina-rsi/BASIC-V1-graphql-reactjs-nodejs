

const express = require("express");
const app = express();
const PORT = 6969;
const graphql = require("graphql");
const { 
        GraphQLSchema , 
        GraphQLObjectType, 
        GraphQLInt,
        GraphQLString, 
        GraphQLList } = graphql;

const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userData = require("./MOCK_DATA.json");

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          first_name: args.first_name,
          last_name: args.last_name,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query :RootQuery,
  mutation : Mutation
});



app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});