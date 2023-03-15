const express = require('express')
const app = express()

//app.use(express.static(__dirname));
app.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
