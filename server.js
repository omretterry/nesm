const express = require("express");
const bp = require("body-parser");
const app = express();

const user = require("./app/routers/user");

app.use(bp.json());

app.use("/api", user);

app.get("/", (req, res) => {
  res.json({ message: "success enter root page" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
