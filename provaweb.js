const frm = document.querySelector("form");
const printa = document.querySelector("h5");

const lista = []; //vetor dos numeros de entrada

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inTarefa.value);
    lista.push(numero);

    frm.inTarefa.value = ""; // limpa o input
    frm.inTarefa.focus();
    
    let resposta = "";

    for(let i=0; i<lista.length; i++) {
        lista.sort();
        resposta += `${lista[i]}` + "\n";
    }

    printa.innerText = resposta; //printa
})


