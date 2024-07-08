let enviar = document.getElementById('enviar');

enviar.addEventListener('click', function () {

    const valor = document.getElementById('valor');
    const entrada = document.getElementById('entrada');
    const alerta = document.querySelector('.container-alert');

    if (valor.value === '' || typeof valor.value === String) {
        alerta.classList.remove('none')
        alerta.innerHTML = `<span>Digite um valor numérico para gerar a tabuada!!</span>`;
    } else {
        alerta.classList.add('none');
        entrada.innerHTML = '';
        for (let i = 1; i < 11; i++) {
            entrada.innerHTML += `                
                <tr>
                    <td>${valor.value}</td>
                    <td>${i}</td>
                    <td>${valor.value * i}</td>
                </tr>`
        }
    }
})