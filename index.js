/*const fs =  require('fs')
const colors = require('colors')

const callback = (err, data) => {
  if (err) {
    console.log("Deu erro", err)
  } else {
    console.log(data.green)
  }
}

fs.readFile('file.txt', 'utf8', callback)*/

const { express } = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/item', {request, Response} => {
  response.json{item}
})


app.listen(2432, {} => {
  console.log('Server running on port 2432')
}

/*postman*/