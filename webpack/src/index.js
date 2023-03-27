import { User } from "./User.js";
import "./styles/main.css";
import json from "./assets/data.json";
import csv from "./assets/username.csv";
import xml from "./assets/plant_catalog.xml";
import image from "./assets/image.jpg"
const user = new User("Max", 20);
console.log(user);
console.log("JSON", json);
console.log("CSV", csv);
console.log("XML", xml);

const imgEl = document.querySelector('.image');
imgEl.insertAdjacentHTML("beforeend", `<img src="${image}" alt="image">`);
