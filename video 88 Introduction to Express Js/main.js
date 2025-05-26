//now lets create minimal express application

const express = require('express')
const app = express()
const port = 3000



 

// app.get or app.post or app.put or app.delete (path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!    dsfdasf')
})

app.get('/about', (req, res) => {
  res.send('about us ')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})


//using the slug (for easy variable creation)
//over here :slug is a parameter

app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from the dB

  //for url: // For URL: http://localhost:3000/blog/intro-to-padosi mode=dark&region=in
  console.log(req.params) //will output {slug: 'intro-to-pinky}

  console.log(req.query ) //{ mode: 'dark',region :'in' )
  res.send(`hello ${req.params.slug}`)
})


// //you can give multiple values too
// // :slug :second are known as URL PARAMATERS
// app.get('/blog/:slug/:second', (req, res) => {
//   //logic to fetch {slug} from the do
//   res.send(`hello ${req.params.slug} and ${req.params.second}`)
// })



// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the do
//   res.send('hello js')
// })

// app.get('/blog/intro-to-py', (req, res) => {
//   //logic to fetch intro to py from the do
//   res.send('hello py')
// })



 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
