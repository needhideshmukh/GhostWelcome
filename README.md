# NEEDHI DESHMUKH
* # problem 1
## Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

## Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

### Approach: Split, reverse, Join is the base of the question. Decimal to binary number convertion is the prerequisite you need.



#### test case :binary(1) ➞ "1"

#### binary(5) ➞ "101"
#### // 1*1 + 1*4 = 5

#### binary(10) ➞ "1010"
#### // 1*2 + 1*8 = 10

```javascript
function binary(decimal) {
  let result = "";
  if (decimal == 0) {
    result = "0";
  }
  while (decimal > 0) {
      result += decimal % 2;
      decimal = Math.floor(decimal/2);
    };
  return result.split("").reverse().join("");
}
```



* # problem2
## Create a function that, given an array similar to the above, sorts the array according to the "content of the elements
### Approach : Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
#### text case :sortIt([4, 1, 3]) ➞ [1, 3, 4] 
#### sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

#### javascript code

```javascript
function sortIt(arr) {
	return arr.sort(function(a, b){
		if(typeof a === 'object')
			return a[0] - b;
		else if(typeof b === 'object')
			return a - b[0];
		else
			return a -b;
	});
}
```



* # problem 3
## Age of random ghosts that appear in front of you
### Approach : if the ghost age you guessed is 5 years of any random ghost you see which changes everytime you refresh the page, the age will be calculated using a formula that i have made.
```javascript
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

```







