const express = require('express')

const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("Hey its a get req")
  res.send('Hello World dsafadsfdasf!')
})

//Example Post Request. usage
app.post('/', (req, res) => {
  console.log("Hey its a post req")
  res.send('Hello World post!')
})

//Example put Request. usage
app.put('/', (req, res) => {
  console.log("Hey its a put req")
  res.send('Hello World put!')
})

 app.get('/index', (req, res) => {
  console.log("Hey its index")
  res.sendFile('templates/index.html', {root:__dirname})
})

//api
 app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, d:4, name:["harry", "jerry"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
