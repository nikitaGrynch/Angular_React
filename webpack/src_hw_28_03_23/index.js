import applianceImg from "@assets/appliance.jpeg";
import carGoodImg from "@assets/car_good.jpeg";
import smartphoneImg from "@assets/smartphone.png";
import tabletImg from "@assets/tablet.png";

import "@styles/main.scss";

let categories = {
  "Мелкая бытовая техника": applianceImg,
  Автотовары: carGoodImg,
  Смартфоны: smartphoneImg,
  Планшеты: tabletImg,
};

let Appliance = [];
let CarGood = [];
let SmartPhone = [];
let Tablet = [];

let filterItems = function (query, arr) {
  return arr.filter((el) => {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};

let makeCategoriesListView = function (redItem = null) {
  let content = "<ul style='list-style: none;'>";
  for (let category in categories) {
    content += `<li><button class='storeItem' style='border: none; padding: 10; ${
      category === redItem ? "background-color: red;" : ""
    }'><img src='${categories[category]}' title='${category}'></button>`;
  }
  content += "</ul>";
  document.getElementById("store").innerHTML = content;
  let items = document.getElementsByClassName("storeItem");
  for (let item of items) {
    item.onclick = addItem;
  }
};

let makeToolsView = function () {
  let content =
    "<button id='showCategory'>Вывод товаров выбранной категории</button>";
  content += "<button id='cleanCategory'>Очистить категорию</button>";
  content += "<button id='search'>Поиск</button>";
  document.getElementById("tools").innerHTML = content;
};

let getArrByName = function (name) {
  let arr;
  switch (name) {
    case "0":
    case "Мелкая бытовая техника": {
      arr = Appliance;
      break;
    }
    case "1":
    case "Автотовары": {
      arr = CarGood;
      break;
    }
    case "2":
    case "Смартфоны": {
      arr = SmartPhone;
      break;
    }
    case "3":
    case "Планшеты": {
      arr = Tablet;
      break;
    }
    default: {
      return null;
    }
  }
  return arr;
};

let addItem = function (e) {
  let categoryName = e.target.title;
  let arr = getArrByName(categoryName);
  if (arr === null) {
    alert("Такой категории не существует");
    return;
  }
  let itemName;
  do {
    itemName = prompt("Введите название товара");
    if (itemName === "") {
      alert("Название товара не введено");
    } else if (itemName === null) {
      break;
    } else if (arr.includes(itemName.toLowerCase())) {
      alert(`Товар "${itemName}" уже существует в данной категории`);
      return;
    } else {
      arr.push(itemName.toLowerCase());
    }
  } while (itemName === "");
};

let showCategory = function () {
  let category = prompt("Введите номер или название категории");
  let arr = getArrByName(category);
  if (arr === null) {
    alert("Такой категории не существует");
    return;
  }
  if (arr.length === 0) {
    alert("Временно в магазине отсутствуют товары данной категории");
    return;
  }
  let content = "<ul>";
  for (let item of arr) {
    content += `<li>${item}`;
  }
  content += "</ul>";
  document.getElementById("list").innerHTML = content;
};

let cleanCategory = function () {
  let category = prompt("Введите номер или название категории");
  let arr = getArrByName(category);
  if (arr === null) {
    alert("Такой категории не существует");
    return;
  }
  arr.length = 0;
};

let search = function () {
  let content = "";
  let category = prompt("Введите номер или название категории");
  if (category === null || category === "") {
    let itemName = prompt("Введите часть названия или полное название товара");
    if (itemName === null || itemName === "") {
      return;
    }
    for (let key in categories) {
      let items = filterItems(itemName, getArrByName(key));
      if (items.length > 0) {
        content += `<h3>${key}</h3>`;
        content += `<ul><li>${items.join("<li>")}</ul>`;
      }
      // if (getArrByName(key).includes(itemName.toLowerCase())) {
      //   //alert(`Товар "${itemName}" находиться в категории "${key}"`);
      //   makeCategoriesListView(key);
      //   return;
      // }
    }
    if (content === "") {
      alert(`Товар "${itemName}" отсутствует`);
    }
  } else {
    let arr = getArrByName(category);
    if (arr === null) {
      alert("Подобной категории не существует");
      return;
    }
    let itemName = prompt("Введите название товара");
    if (itemName === null || itemName === "") {
      return;
    }
    let items = filterItems(itemName, getArrByName(category));
    if (items.length > 0) {
      content += `<ul><li>${items.join("<li>")}</ul>`;
    } else {
      alert(`Товар "${itemName}" отсутствует в данной категории`);
    }
  }
  document.getElementById("list").innerHTML = content;
};

makeCategoriesListView();
makeToolsView();
document.getElementById("showCategory").onclick = showCategory;
document.getElementById("cleanCategory").onclick = cleanCategory;
document.getElementById("search").onclick = search;
