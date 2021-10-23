function Calcular(){
	//declarar variables
	var g,p,r;
	//recuperar los valores de las cajas de texto 
	g=parseInt(document.getElementById("Gravedad").value);
	p=parseInt(document.getElementById("Peso").value);
	//realizar las operaciones
	r=g*p/9.8;
	//mostrar el resultado 
	document.getElementById("Resultado").value=r;
}

function Borrar(){
	document.getElementById("Gravedad").value="";
	document.getElementById("Peso").value="";
	document.getElementById("Resultado").value="";
}