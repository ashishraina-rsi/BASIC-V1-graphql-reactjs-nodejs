// const express = require("express");
// const app = express();
// const PORT = 6969;
// const cors = require("cors");
// const graphqlHTTP = require("express-graphql");

// const schema = require('./Schemas/index.js');

// app.use(express.json());
// app.use(cors());

// app.use('/graphql', graphqlHTTP({
//     schema, 
//     graphiql : true
// }))

// app.listen(PORT, () => {
//     console.log(`Server Running on ${PORT}!`)
// });

const express = require("express");
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
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