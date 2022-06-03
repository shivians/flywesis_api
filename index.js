require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const logger=require("morgan");
const PORT = process.env.PORT || 4000;
require("./config/db");

//middleware
app.use(cors());
// app.use(logger())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//import routes
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const blogRouter = require("./routes/blogRoute");
const contactRouter = require("./routes/contactRoute")

//use routes
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", cartRouter);
app.use("/api", blogRouter);
app.use("/api",contactRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
