const fs =  require('fs')
const colors = require('colors')

const callback = (err, data) => {
  if (err) {
    console.log("Deu erro", err)
  } else {
    console.log(data.green)
  }
}

fs.readFile('file.txt', 'utf8', callback)