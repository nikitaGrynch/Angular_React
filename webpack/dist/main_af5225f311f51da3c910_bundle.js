(()=>{"use strict";class t{constructor(t,e,i,h=""){this.height=t,this.width=e,this.imgID=h,this.imgSRC="https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg",this.refresh=this.refresh.bind(this),this.nLikes=0,this.price=i,this.imgTitle=""}show(t){let e=document.createElement("img");e.src=this.imgSRC,e.width=this.width,e.height=this.height,e.title=this.price,e.price=this.price,t.append(e)}getImg(){let t=document.createElement("img");return t.src=this.imgSRC,t.width=this.width,t.height=this.height,t.title=this.price,t.id=this.imgID,t.price=this.price,t.setAttribute("price",String(this.price)),t}refresh(){this.height>=20?(this.height/=2,this.width/=2,document.getElementById(this.imgID).height=this.height,document.getElementById(this.imgID).width=this.width):alert("Stop decreasing!")}}document.getElementById("myBtn1").onclick=()=>{console.log("Hello");let e,i=document.getElementById("app"),h=[];for(e=0;e<10;e++){let i=new t(50,50,100*e+1,`myImg${e+1}`);h.push(i.getImg())}i.append(...h)},document.getElementById("showAvailable").onclick=()=>{let e=document.getElementById("app").querySelectorAll("img");for(let i of e)if(Number(i.price)<500){let e=new t(50,50,0,i.id);e.imgSRC="https://previews.123rf.com/images/roxanabalint/roxanabalint1701/roxanabalint170100138/69079014-not-available-grunge-rubber-stamp-on-white-background-vector-illustration.jpg",document.getElementById(i.id).replaceWith(e.getImg())}}})();