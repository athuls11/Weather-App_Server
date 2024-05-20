import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { config } from "dotenv";
import connectToMongoDB from "./db/mongoose.js";
import { schema, rootValue } from "./schema/graphQL.schema.js";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
