console.log("El resultado de la suma es "+ sumar(process));

function sumar(process){
	var result = 0;
	for(i=2; i < process.argv.length; i++){
		result += Number(process.argv[i]);
	}
	return result;
} 