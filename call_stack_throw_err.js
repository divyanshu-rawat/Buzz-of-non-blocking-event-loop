


function throw_err(){

	throw new Error('oops!');

}


function call_throw_err(){

	throw_err();

}

function foo(){

	call_throw_err();
}

foo();