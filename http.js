const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8399;

const app = http.createServer((req, res) => {
  switch (req.url) {
      case "/src/assets/image.png":
      fs.readFile(path.join(__dirname, "src/assets/image.png"), (e, d) =>
        e ? console.log(e) : res.end(d)
      );
      break;
    case "/":
      fs.readFile(path.join(__dirname, "src/index.html"), (e, d) =>
        e ? console.log(e) : res.end(d)
      );
      break;

    case "/about":
      fs.readFile(path.join(__dirname, "src/about.html"), (e, d) =>
        e ? console.log(e) : res.end(d)
      );
      break;

    case "/course":
      fs.readFile(path.join(__dirname, "src/course.html"), (e, d) =>
        e ? console.log(e) : res.end(d)
      );
      break;

    case "/contact":
      fs.readFile(path.join(__dirname, "src/contect.html"), (e, d) =>
        e ? console.log(e) : res.end(d)
      );
      break;

    case "/services":
      fs.readFile(path.join(__dirname, "src/services.html"), (e, d) =>
        e ? console.log(e) : res.end(d)
      );
      break;

    default:
      res.end("Page not found");
  }
});

app.listen(PORT, () =>
  console.log("Server running at http://localhost:8399")
);
