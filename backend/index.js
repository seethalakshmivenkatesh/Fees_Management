const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");
const institutionRoutes = require("./Routes/institutionRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/institutions", institutionRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
