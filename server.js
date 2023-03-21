import http from "http";
import fs from "fs";
import path from "path";

const __dirname = path.resolve(path.dirname("."));
const pathToFile = path.resolve(__dirname, "pages");
const PORT = 3000;
const server = http.createServer((request, response) => {
  console.log(request);
  switch (request.url) {
    case "/home": {
      const data = fs.readFileSync(path.resolve(pathToFile, "home.html"));
      response.end(data);
      break;
    }
    case "/about": {
      const data = fs.readFileSync(path.resolve(pathToFile, "about.html"));
      response.end(data);
      break;
    }
    case "/": {
      response.end("<h1>Hello Node</h1>");
      break;
    }
    default: {
      const data = fs.readFileSync(path.resolve(pathToFile, "notFound.html"));
      response.end(data);
      break;
    }
  }
});

server.listen(PORT, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started http://localhost:${PORT}`);
  }
});
