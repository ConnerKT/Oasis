const express = require('express')
const app = express()
const port = 3001

// Log every time we request hits our server
app.use(() => {
    console.log("Incoming request");
})
// Testing our / endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  // To tell the user what port we are using
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });