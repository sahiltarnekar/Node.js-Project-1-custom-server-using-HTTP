const http = require('http')
const path = require('path')
const fs = require('fs')
const PORT = 8399

const app = http.createServer((req, res) => {
  switch (req.url) {

    case '/':
      const homepath = path.join(__dirname, '/src/index.html')
      fs.readFile(homepath, (err, data) => {
        err ? console.log(err) : res.end(data)
      })
      break;

    case '/about':
      const aboutpath = path.join(__dirname, '/src/about.html')
      fs.readFile(aboutpath, (err, data) => {
        err ? console.log(err) : res.end(data)
      })
      break;

    case '/course':
      const coursepath = path.join(__dirname, '/src/course.html')
      fs.readFile(coursepath, (err, data) => {
        err ? console.log(err) : res.end(data)
      })
      break;

    case '/contact':
      const contectpath = path.join(__dirname, '/src/contect.html')
      fs.readFile(contectpath, (err, data) => {
        err ? console.log(err) : res.end(data)
      })
      break;

        case '/services':
      const servicespath = path.join(__dirname, '/src/services.html')
      fs.readFile(servicespath, (err, data) => {
        err ? console.log(err) : res.end(data)
      })
      break;

    default:
      res.end("page not found bro ...................")
  }
})

app.listen(PORT, () =>
  console.log("server is connected at http://localhost:8399")
)
