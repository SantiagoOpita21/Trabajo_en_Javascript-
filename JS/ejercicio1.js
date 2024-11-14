//ejercicio de convertir
function convertir() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    alert(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} °F`);
}


document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); 
    convertir();
};

//ejercicio de contar palabras
function contarPalabras(texto) {
    const palabras = texto.trim().split(/\s+/);
    return palabras[0] === '' ? 0 : palabras.length;
    
}

document.getElementById('contarBtn').onclick = function() {
    const parrafo = document.getElementById('parrafo').value;
    const cantidadPalabras = contarPalabras(parrafo);
    document.getElementById('resultado').textContent = `Número de palabras: ${cantidadPalabras}`;
};

//ejercicio de calculadora de edad

function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear(); 
    return anioActual - anioNacimiento; 
}

document.getElementById('calcularBtn').onclick = function() {
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);
    if (isNaN(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > 2024) {
        alert("Por favor, ingresa un año válido.");
    } else {
        const edad = calcularEdad(anioNacimiento);
        alert(`Tienes ${edad} años.`);
    }
};

// convertidor de moneda

document.getElementById('convertirBtn').onclick = function() {

    var montoDolares = document.getElementById('montoDolares').value;
    var monedaSeleccionada = document.getElementById('moneda').value;
    
    
    var tasaCambio;
    if (monedaSeleccionada === "euros") {
        tasaCambio = 0.85; 
    } else if (monedaSeleccionada === "pesos") {
        tasaCambio = 20.00; 
    }

    
    if (montoDolares === "" || montoDolares <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return; 
    }

   
    var resultado = montoDolares * tasaCambio;

    
    alert("El monto convertido es: " + resultado.toFixed(2) + " " + (monedaSeleccionada === "euros" ? "EUR" : "MXN") + ".");
};

//convertir minuscula y mayuscula

function convertirAMayusculas() {
    var textoArea = document.getElementById("texto");
    textoArea.value = textoArea.value.toUpperCase();
}

function convertirAMinusculas() {
    var textoArea = document.getElementById("texto");
    textoArea.value = textoArea.value.toLowerCase();
}