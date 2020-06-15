const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("An alligator approaches!");
});

app.listen(3000 || process.env.PORT, () =>
  console.log("Gator app listening on port 3000!")
);
