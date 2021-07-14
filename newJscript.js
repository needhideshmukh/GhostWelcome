// problem 1
// guess my age 


// var imagesArray = ["imgs/ghost1.jpeg","imgs/ghost2.jpeg","imgs/ghost3.jpeg","imgs/ghost4.jpeg"];
// function displayImg(){
//     var num = Math.floor(Math.random()*(imagesArray.length));
//   document.ghost.src= "imgs/ghost"+imagesArray[num]+".jpeg";
  
// }


// var arr = [
//   "imgs/ghost1.jpeg",
//   "imgs/ghost2.jpeg",
//   "imgs/ghost3.jpeg",
//   "imgs/ghost4.jpeg",
// ];
// function GFG_Fun() {
// //   let a = (document.querySelector(".randomGhost").innerHTML =
// //     arr[Math.floor(Math.random() * arr.length)]);
//   let oldImage = document.querySelector(".randomGhost");
// //   let newImage = oldImage.getAttribute("src");
//   oldImage.setAttribute("src","imgs/ghost2.jpeg");
 
// }
// GFG_Fun();

function a() {
  var arr = [
    "imgs/ghost1.jpeg",
    "imgs/ghost2.jpeg",
    "imgs/ghost3.jpeg",
    "imgs/ghost4.jpeg",
  ];
  let b = (document.querySelector(".randomGhost").innerHTML =
    arr[Math.floor(Math.random() * arr.length)]);

  var image = document.querySelector(".randomGhost");
  image.setAttribute("src", b);
}



document.querySelector("img").addEventListener("click", function () {
    var ghostAge = prompt("how old do you think the ghost is?");
    var RealAge = Math.floor(Math.random() * 100 - 33);
    alert("the real age of the ghost is " + RealAge + " years !");
});