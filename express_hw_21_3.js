import express, { request } from "express";
import os from "os";
import fs from "fs";
import events from "events";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const emitter = new events.EventEmitter();

const app = express();
const __dirname = path.resolve(path.dirname("."));

app.get("/", (request, response) => {
  response.end("Hello");
});

// Ex. 5
let main = (request, response) => {
  response.end("main");
};

app.get("/main", main);

// Ex. 4
emitter.addListener("connect", (data) => {
  console.log("connection ON: ", data);
});

emitter.addListener("disconnect", (data) => {
  console.log("connection OFF: ", data);
});

app.get("/connect", (request, response) => {
  let msg = "Successfull database connection";
  emitter.emit("connect", { message: msg });
  response.end(msg);
});

app.get("/disconnect", (request, response) => {
  let msg = "Successful disconnect from database";
  emitter.emit("disconnect", { message: msg });
  response.end(msg);
});

// Ex. 3
app.get("/os", (request, response) => {
  const osConfig = getOsConfig();
  fs.writeFile(
    path.resolve(__dirname, "data", "osConfig.json"),
    JSON.stringify(osConfig),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Os Config file Saved..");
    }
  );

  response.end(JSON.stringify(osConfig));
});

let getOsConfig = function () {
  return {
    arch: os.arch(),
    cpus: os.cpus(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    hostname: os.hostname(),
    machine: os.machine(),
    networkInterfaces: os.networkInterfaces(),
    platform: os.platform(),
    release: os.release(),
    tmpdir: os.tmpdir(),
    totalmem: os.totalmem(),
    type: os.type(),
    uptime: os.uptime(),
    version: os.version(),
  };
};

app.listen(process.env.PORT, () => {
  console.log(`Server started http://localhost:${process.env.PORT}`);
});
