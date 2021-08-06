const btn = document.getElementsByName('btn')[0];
const btn2 = document.getElementsByName('btn-check')[0];
const answer = document.getElementsByName('answer')[0];
document.getElementsByClassName
const ne = document.createElement("div");
document.body.appendChild(ne)
const nr = document.createElement("div");
nr.innerHTML = "Respuesta"
document.body.appendChild(nr)
btn.addEventListener('click', suma)
function suma(){
    let rnd = Math.floor(Math.random() * 101);
    let rnd2 = Math.floor(Math.random() * 101);
    ne.innerHTML = `La suma de ${rnd} y ${rnd2} es`;
    respuesta = rnd + rnd2;
    return respuesta;
};

btn2.addEventListener('click', validar)
function validar(rnd,rnd2){
    let useranswer = answer.value;
    let correct = respuesta;
    if (useranswer == correct) {
        nr.innerHTML = "Respuesta Correcta";
    }
    else {
        nr.innerHTML = "Respuesta Incorrecta";
    }
};

