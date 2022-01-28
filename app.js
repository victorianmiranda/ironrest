require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("./config/db.config")();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Não esquecer de criar variável de ambiente com o endereço do seu app React (local ou deployado no Netlify)
app.use(
  cors({
    origin: process.env.REACT_APP_URL, // NÃO PODE TER BARRA NO FINAL!!!!!
  })
);

const userRouter = require("./routes/user.routes");

app.use("/api", userRouter);
//importando o arquivo de rotas dos livros para ser utilizados


const bookRoutes  = require("./routes/Book.routes");
app.use("/api", bookRoutes);
app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`),
  console.log (process.env.REACT_APP_URL)
);