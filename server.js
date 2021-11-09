const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/surveyData', (req, res) => {
    console.log("request body is: ",req.body);
    res.send(200, req.body);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})