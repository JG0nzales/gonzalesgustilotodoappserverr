const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

var PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is starting on port ${PORT}`);
});
