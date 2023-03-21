import path from "path";
import fs from "fs";
import { receiveMessageOnPort } from "worker_threads";
import events from "events";

const emitter = new events.EventEmitter(); // обработчик

emitter.addListener("show", (data) => {
  // create event
  console.log("show ON: ", data);
});

emitter.addListener("hide", (data) => {
  // create event
  console.log("hie ON: ", data);
});

emitter.emit("show", { message: "Show page with products" });
emitter.emit("hide", { message: "Hide page with products" });

// const __dirname = path.resolve(path.dirname("."));
// fs.readFile(path.resolve(__dirname, "logs", "data.json"), (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     const student = JSON.parse(data.toString());
//     console.log(`${student.name} ${student.age} ${student.group}`);
//   }
// });
//#region HW 20_03_23

// fs.mkdir(path.resolve("data"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Data folder Created..");
// });

// fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     fs.writeFile(
//       path.resolve("data", "currency.json"),
//       JSON.stringify(data),
//       (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("Currency file Saved..");
//       }
//     );
//   });

//#endregion

// fs.mkdir(path.resolve("dir1", "dir2", "dir3"), {recursive: true}, (err) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log("Created..");
// });

// fs.rm("dir1", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Removed...");
// });

// fs.mkdir(path.resolve("logs"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Created...");
// });

// fs.writeFile(path.resolve("logs", "logs.txt"), "data", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Success...");
// });

// console.log(process.argv);
