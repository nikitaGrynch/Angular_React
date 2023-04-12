import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config();

const app = express();

const __dirname = path.resolve(path.dirname("."));
const pathToFile = path.resolve(__dirname, "pages");

app.get("/", (request, response) => {
  const data = fs.readFileSync(path.resolve(pathToFile, "home.html"));
  response.write(data);
  response.end();
});

app.get("/about", (request, response) => {
  const data = fs.readFileSync(path.resolve(pathToFile, "about.html"));
  response.write(data);
  response.end();
});

app.get("*", (request, response) => {
  const data = fs.readFileSync(path.resolve(pathToFile, "notFound.html"));
  response.write(data);
  response.end();
});

app.listen(process.env.PORT, () => {
  console.log(`Server started http://localhost:${process.env.PORT}`);
});
