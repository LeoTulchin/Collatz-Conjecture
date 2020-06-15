function oddEven(a){
	if(a%2==1){
		return (3*a)+1;
	}
	else{
		return a/2;
	}
}


function collatz(a){
	let numSteps = 0;
	while(a!=1){
		a = oddEven(a);
		numSteps++;
		console.log(a);
	}
	return numSteps;
}
