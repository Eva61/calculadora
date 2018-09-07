var operandoa;
var operandob;
var operacion;

function init(){
	//Definimos las variables y los elementos del DOM
	var resultado = document.getElementById('resultado'),
		reset = document.getElementById('reset'),
		suma = document.getElementById('suma'),
		restar = document.getElementById('restar'),
		multiplicacion = document.getElementById('multiplicacion'),
		division = document.getElementById('division'),
		igual = document.getElementById('igual'),
		uno = document.getElementById('uno'),
		dos = document.getElementById('dos'),
		tres = document.getElementById('tres'),
		cuatro = document.getElementById('cuatro'),
		cinco = document.getElementById('cinco'),
		seis = document.getElementById('seis'),
		siete = document.getElementById('siete'),
		ocho = document.getElementById('ocho'),
		nueve = document.getElementById('nueve'),
	//El evento onClick se lanza cuando el usuario hace un click con el boton
	uno.onclick = function(e){
		resultado.textContent += + "1";
	}
	dos.onclick = function(e){
		resultado.textContent += + "2";
	}
	tres.onclick = function(e){
		resultado.textContent += + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent += + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent += + "5";
	}
	seis.onclick = function(e){
		resultado.textContent += + "6";
	}
	siete.onclick = function(e){
		resultado.textContent += + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent += + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent += + "9";
	}
	cero.onclick = function(e){
		resultado.textContent += + "0";
	}
	suma.onclick = function(e){
		operandoa = resultado.textContent; 
		operacion = "+";
		limpiar();
	}
	resta.onclick = function(e){
		operandoa = resultado.textContent; 
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		operandoa = resultado.textContent; 
		operacion = "*";
		limpiar();
	}
	division.onclick = function(e){
		operandoa = resultado.textContent; 
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = resultado.textContent; 
		resolver();
	reset.onclick = function(e){
		resetear();
	}
	
}
function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch (operacion){
		case "+":
		res = parseFloat(operandoa) + parseFloat(operandob);
		break;

		case "-":
		res = parseFloat(operandoa) - parseFloat(operandob);
		break;

		case "*":
		res = parseFloat(operandoa) * parseFloat(operandob);
		break;

		case "/":
		res = parseFloat(operandoa) / parseFloat(operandob);
		break;
	}
	resetear();
	resultado.textContent = res;

}
