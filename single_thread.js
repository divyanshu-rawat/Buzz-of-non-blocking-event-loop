



function multiply (x,y){
	
	return x * y;
}
function square(n){
	
	return multiply(n,n);
}

function printSquare(n){

	var squared = square(n);
	console.log(squared);
}

printSquare(4);