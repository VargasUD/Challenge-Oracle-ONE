const frase = document.getElementById("cajaFrase")
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

//Esta es la acción del botón encriptar
const boton1 = document.getElementById("encr")
boton1.addEventListener("click", ()=>{
    var retorno = work(frase.value)
    document.getElementById("cajaResultado").value = retorno
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    copia.style.display = "block"
})

//Esta es la acción del botón desencriptar
const boton2 = document.getElementById("desencr")
boton2.addEventListener("click", ()=>{
    var retorno = deswork(frase.value)
    document.getElementById("cajaResultado").value = retorno
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    copia.style.display = "block"
})

//Esta es la funcion que separa la frase en un arreglo para reemplazar punto por punto y devolver la frase encriptada
function work(txt){
    var f = txt.split('')
    for (let i = 0; i < f.length; i++) {
        if(f[i] == 'a'){
            f[i] = convertirA(f[i])
        } else if(f[i] == 'e'){
            f[i] = convertirE(f[i])
        } else if(f[i] == 'i'){
            f[i] = convertirI(f[i])
        } else if(f[i] == 'o'){
            f[i] = convertirO(f[i])
        } else if(f[i] == 'u'){
            f[i] = convertirU(f[i])
        }
    }
    return f.join('')
}

//Esta es la funcion que separa la frase en un arreglo para reemplazar punto por punto y desencriptar la frase a su normalidad
function deswork(txt){
    for (let i = 0; i < txt.length; i++) {
        if(txt.includes('ai')){
            txt = txt.replace('ai','a')
        } else if(txt.includes('enter')){
            txt = txt.replace('enter','e')
        } else if(txt.includes('imes')){
            txt = txt.replace('imes','i')
        } else if(txt.includes('ober')){
            txt = txt.replace('ober','o')
        } else if(txt.includes('ufat')){
            txt = txt.replace('ufat','u')
        }
    }
    return txt
}

//Convierte la vocal a en la llave secreta 'ai'
function convertirA(frase){
    return frase.replaceAll('a','ai')
}

//Convierte la vocal e en la llave secreta 'enter'
function convertirE(frase){
    return frase.replaceAll('e','enter')
}

//Convierte la vocal i en la llave secreta 'imes'
function convertirI(frase){
    return frase.replaceAll('i','imes')
}

//Convierte la vocal o en la llave secreta 'ober'
function convertirO(frase){
    return frase.replaceAll('o','ober')
}

//Convierte la vocal u en la llave secreta 'ufat'
function convertirU(frase){
    return frase.replaceAll('u','ufat')
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}