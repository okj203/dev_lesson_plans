const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config");
const authRouter = require("./routes/auth.route");
const productsRouter = require("./routes/products.route");
const cartRouter = require("./routes/cart.route");
const ordersRouter = require("./routes/orders.route");

// TODO: write env variables for the port
const port = 9000;

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

app.use(express.json());
app.use(cors("*"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/orders", ordersRouter);


app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening at ${port}`);
});
