let i = Math.ceil(Math.random() * 6);
console.log(i);
document.querySelector("body").style.backgroundImage =
  "url(images/photo" + i + ".jpg)";
