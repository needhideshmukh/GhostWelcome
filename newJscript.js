//problem 1
// guess my age 



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