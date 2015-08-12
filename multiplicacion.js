console.log("El resultado de la multiplicacion es "+ multiplicar(process));

function multiplicar(process){
	var result = 1;
	for(i=2; i < process.argv.length; i++){
		result *= Number(process.argv[i]);
	}
	return result;
} 