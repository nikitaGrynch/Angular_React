import $ from "jquery";

import "./styles/main.css"

import cake from "./assets/cake.png";
import donut from "./assets/donut.png";
import honey from "./assets/honey.png";

const imgs = {
  Cake: cake,
  Donut:
    donut,
  Honey:
    honey,
};

$(() => {
  $("h3").click(() => {
    $("ul").toggle(() => {
      $("img").hide();
      $("li").removeClass("chosen");
    });
  });
  $("li").click(function () {
    $("li").removeClass("chosen");
    let item = $(this).text();
    console.log(item);
    $(this).addClass("chosen");
    $("img").show(function () {
      $(this).attr("src", imgs[item]);
    });
  });
});
