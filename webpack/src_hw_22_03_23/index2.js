import { Image1 } from "./Image1";

let showAvailable = () => {
  let root = document.getElementById("app");
  let imgs = root.querySelectorAll("img");
  for (let img of imgs) {
    if (Number(img.price) < 500) {
      let newImg = new Image1(50, 50, 0, img.id);
      newImg.imgSRC =
        "https://previews.123rf.com/images/roxanabalint/roxanabalint1701/roxanabalint170100138/69079014-not-available-grunge-rubber-stamp-on-white-background-vector-illustration.jpg";
      document.getElementById(img.id).replaceWith(newImg.getImg());
    }
  }
};

let myAction = () => {
  console.log("Hello");
  let root = document.getElementById("app");
  let imgs = [];
  let i;
  for (i = 0; i < 10; i++) {
    let img = new Image1(50, 50, i * 100 + 1, `myImg${i + 1}`); //1..10
    imgs.push(img.getImg());
  }
  root.append(...imgs);
};
document.getElementById("myBtn1").onclick = myAction;

document.getElementById("showAvailable").onclick = showAvailable;
