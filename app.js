//crear un diccionario 

let dict = {
    'e': 'enter',
    'i':  'imes',
    'a':  'ai',
    'o':  'ober',
    'u':  'ufat'
}

let valorPantalla = 0;
function vaciar () {
    let entrada = document.getElementById('entrada');
    let resultado = document.getElementById('resultado');

    entrada.value = "";
    resultado.innerText = "";
}

function validar() {
    let entrada = document.getElementById('entrada');
    let resultado = document.getElementById('resultado');

    if (entrada.value.length > 0) {
        let valor = entrada.value.toLowerCase();

        // Crear una variable para almacenar el valor limpio
        let valorLimpio = '';

        // Verificar cada carácter en el valor
        for (let i = 0; i < valor.length; i++) {
            if (["á", "é", "í", "ó", "ú", "ä", "ë", "ï", "ö", "ü", "ç", "$", "/", "!", "@", "#", "&", "(", ")", "-", "_"].includes(valor[i])) {
                alert(`Este carácter '${valor[i]}' no es válido`);
                // Solo actualiza el valor limpio si el carácter es válido
            } else {
                valorLimpio += valor[i];
            }
            // Actualizar el valor del input con el valor limpio
            entrada.value = valorLimpio;
        }
    }
}

function codificar() {
    let entrada = document.getElementById('entrada');
    let resultado = document.getElementById('resultado');
    let codigo = '';
    resultado.innerText = '';
    console.log(entrada.value);
    if (entrada.value != "Ingresa tu texto aqui") {
        for (let i = 0, n = entrada.value.length; i < n; i++) { 
            let letra = entrada.value[i];
            if(["a", "e", "i", "o", "u"].includes(letra)) {
                codigo += dict[entrada.value[i]];
            } else {
                codigo += entrada.value[i];
                };
        }
    }
    
    entrada = entrada.value;
    resultado.innerText = codigo; 
    console.log(resultado.innerText);
    mostrarBotonCopiar();
    ocultarLupa();
}

function decodificar() {
    const entrada = document.getElementById('entrada').value;
    const resultado = document.getElementById('resultado');
    let codigo = entrada;
    let result = codigo;

    Object.entries(dict).forEach(([key, value]) => {
        result = result.split(value).join(key);
    });

    resultado.innerText = result;
    console.log(result);
    mostrarBotonCopiar();
    ocultarLupa();
}

function copiar() {
    const resultado = document.getElementById('resultado');
    let copia = resultado;
    // API del portapapeles 
    navigator.clipboard.writeText(copia.innerText) .then(() => {
            console.log('Texto copiado al portapapeles ---> ', copia);
        })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
        });
        ocultarBotonCopiar();
        if (valorPantalla >= 920) {
            mostrarLupa();
        }
}

function mostrarBotonCopiar() {
    document.querySelector('.boton-copiar').style.display = 'block';
}

function mostrarLupa() {
    document.querySelector('.lupa').style.display = 'block';
}
function ocultarBotonCopiar() {
    document.querySelector('.boton-copiar').style.display = 'none';
}

function ocultarLupa() {
    document.querySelector('.lupa').style.display = 'none';
}
// Define the media query
var mediaqueryList = window.matchMedia("(max-width: 920px)");

// Define a function to handle the media query change
function handleMediaQueryChange(event) {
    console.log('Ejecutado el listener', event);
    if (event.matches) {
        // The viewport is 920px wide or less
        valorPantalla = 919;
        console.log('Viewport is 920px or less');
    } else {
        // The viewport is more than 920px wide
        valorPantalla = 920;
    }
}

// Add the event listener for media query change
mediaqueryList.addEventListener('change', handleMediaQueryChange);

// Initial check
handleMediaQueryChange(mediaqueryList);

/*                  */
// Define la media query
var mediaqueryList = window.matchMedia("(max-width: 920px)");

// Función que se ejecuta cuando cambia el tamaño de la ventana
function handleResize(event) {
    if (mediaqueryList.matches) {
        console.log("La pantalla es menor o igual a 920px de ancho");
    } else {
        console.log("La pantalla es mayor a 920px de ancho");
    }
    location.reload();
}

// Añade el evento 'resize' al objeto window
window.addEventListener('resize', handleResize);

// Ejecuta la función al cargar la página para verificar el estado inicial
//handleResize();

