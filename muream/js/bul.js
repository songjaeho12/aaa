function on() {
    document.getElementsByTagName("img")[0].src = "images/pic_bulbon.gif";   
   }
   let x = document.getElementById("on");
   x.onclick = function(){
      document.getElementsByTagName("img")[0].src = "images/pic_bulbon.gif"; 
   }
   function off() {
    document.getElementsByTagName("img")[0].src = "images/pic_bulboff.gif";   
   }