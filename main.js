function tocaSom (idElementoAudio) {
    document. querySelectorAll(`.tecla`);
}

const lisstaDeTeclas = document. querySelectorAll(`.tecla`);

//para
for(let contador= 0; contador < lisstaDeTeclas.length; contador++){

const tecla = lisstaDeTeclas [contador];
const instrumento = tecla.classList[1]
const idAudio = `#som ${instrumento}`; //template string

tecla.onclick = function(){
tocaSom(idAudio);
}
}

