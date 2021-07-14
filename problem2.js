// problem 2
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements

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
