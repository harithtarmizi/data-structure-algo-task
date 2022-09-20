function factorial(n) {
	let start = 1;
	for (let i = 1; i <= n; i++) {
		answer =  start *= i;
	}

	console.log(answer);
}

factorial(5);