export class Image1 {
    constructor(height, width, price, imgID = "") {
      this.height = height;
      this.width = width;
      this.imgID = imgID;
      this.imgSRC =
        "https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg";
      this.refresh = this.refresh.bind(this);
      this.nLikes = 0;
      this.price = price;
      this.imgTitle = "";
    }
  
    show(root) {
      let myImg = document.createElement("img");
      myImg.src = this.imgSRC;
      myImg.width = this.width;
      myImg.height = this.height;
      myImg.title = this.price;
      myImg.price = this.price;
      root.append(myImg);
    }
  
    getImg() {
      let myImg = document.createElement("img");
      myImg.src = this.imgSRC;
      myImg.width = this.width;
      myImg.height = this.height;
      myImg.title = this.price;
      myImg.id = this.imgID;
      myImg.price = this.price;
      myImg.setAttribute("price", String(this.price));
      return myImg;
    }
  
    refresh() {
      if (this.height >= 20) {
        this.height /= 2;
        this.width /= 2;
        document.getElementById(this.imgID).height = this.height;
        document.getElementById(this.imgID).width = this.width;
      } else {
        alert("Stop decreasing!");
      }
    }
  }
  