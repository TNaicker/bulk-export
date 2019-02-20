const express = require('express');
const app = express();
const PORT = 3000;
const exportedFuncs = require('./exporter');

// Route for adding
app.get('/add/:a/:b', (req, res) => {
  // parses params into numbers
  const n2 = Number(req.params.a);
  const n1 = Number(req.params.b);
  // calls addition function from our bulk require statement
  const result = exportedFuncs.add(n1, n2)

  console.log(result);
  res.send('result of addition is: ' + result)
})

// Route for subtracting
app.get('/subtract/:a/:b', (req, res) => {
  // parses params into numbers
  const n2 = Number(req.params.a);
  const n1 = Number(req.params.b);
  // calls subtraction function from our bulk require statement
  const result = exportedFuncs.subtract(n1, n2)

  console.log(result);
  res.send('result of subtraction is: ' + result)
})

// Route for multiplying
app.get('/multiply/:a/:b', (req, res) => {
  // parses params into numbers
  const n2 = Number(req.params.a);
  const n1 = Number(req.params.b);
  // calls multiply function from our bulk require statement
  const result = exportedFuncs.multiply(n1, n2)

  console.log(result);
  res.send('result of multiplication is: ' + result)
})

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
