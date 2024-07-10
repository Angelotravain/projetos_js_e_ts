const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

const calcular = document.querySelector('#calcular');
const limpar = document.querySelector('#limpar');



limpar.addEventListener('click', () => {
    altura.value = '';
    peso.value = '';
})

calcular.addEventListener('click', () => {
    if (!peso.value || !altura.value) {
        return;
    } else {
        let valor = Number.parseFloat(peso.value) / (altura.value.replace(',', '.') * altura.value.replace(',', '.'));
        const result = document.querySelector('#resultado');


        const span = document.createElement('span');
        span.textContent = `O Resultado É: ${valor.toFixed(2)}`;

        result.appendChild(span);
    }
})