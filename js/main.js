// constantes
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btnCalcular');
const tr = document.querySelectorAll('tr');

// eventeListeners
btnCalcular.addEventListener('click', e => {
    e.preventDefault();

    if(!peso.value != '' || !altura.value != '') {
        alert('Debe ingresar el peso y la altura');
        return;
    }
    const estatura = altura.value **2;
    const imc = parseInt(peso.value) / estatura;

    const redondeo = Math.round(imc);
    for (let index = 0; index < tr.length; index++) {

        if(tr[index].classList.contains('seleccion')) {
            tr[index].classList.remove('seleccion');
        }
    }

    for (let index = 0; index < tr.length; index++) {

        if(tr[index].classList.contains('seleccion')) {
            tr[index].classList.remove('seleccion');
        }

        const rango = parseInt(tr[index].getAttribute('class'));

        if(rango > imc) {
            tr[index - 1].classList.add('seleccion');
            break
        }
        
    }
})



