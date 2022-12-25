let nota1 = Number(prompt("Ingrese su primer nota"));
let nota2 = Number(prompt("Ingrese su segunda nota"));
let nota3 = Number(prompt("Ingrese su tercer y última nota"));

function notaFinal(nota1, nota2, nota3) {
    let resultado = (nota1 + nota2 + nota3)/ 3;

    if (resultado < 7) {
        alert("Ústed ha reprobado, su promedio es de : " + resultado)
    }else{
        alert("Ústed ha aprobado, su promedio es de : " + resultado)
    }

}

notaFinal (nota1, nota2, nota3);