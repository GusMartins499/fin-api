import express from "express";
import { v4 } from "uuid";

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const uuidv4 = v4();

  customers.push({
    uuidv4,
    cpf,
    name,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333, () => console.log("🚀 Server started at port 3333"));
