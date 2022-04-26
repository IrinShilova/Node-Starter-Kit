const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Yay Node!");
});

app.get("/one", (req, res) => {
    let answer = req.query.q;
    res.send("Page number one " + answer)
});
  
app.get("/multiply", (req, res) => {
    let packages = req.query.packages;
    let weight = req.query.weight;

    res.send(`The result is ${packages * weight}`)
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });