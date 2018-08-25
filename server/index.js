const express = require("express");
const bodyParser = require("body-parser");
const connection = require("../database-mysql");

const app = express();

app.use(express.static(__dirname + "/../react-client/dist"));
app.use(bodyParser);

app.get("api/bars", function(req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
