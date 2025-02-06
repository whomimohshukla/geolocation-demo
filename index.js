const express = require("express");
const { conectDb } = require("./config/db");
const route = require("./routes/route");

const app = express();
const port = 3000;
app.use(express.json());

conectDb();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.use("/api/v1", route);
