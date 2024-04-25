let btn = document.getElementById('btn');
let table = document.getElementById('resultado');

let arrPessoas = [];

function cadastrar() {
    let pessoa = {
        sexo: document.getElementById('sexo').value,
        idade: document.getElementById('idade').value,
        fatorA: document.getElementById('fatorA').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value,
        tmb: TMB(
            document.getElementById('peso').value,
            document.getElementById('altura').value,
            document.getElementById('idade').value,
            document.getElementById('sexo').value
        ),
        realTmb: realTmb(
            TMB(
                document.getElementById('peso').value,
                document.getElementById('altura').value,
                document.getElementById('idade').value,
                document.getElementById('sexo').value
            ),
            document.getElementById('fatorA').value
        ),
    };

    arrPessoas.push(pessoa);

    imprimir();
}

function imprimir() {
    table.innerHTML = '';
    for (let i = 0; i < arrPessoas.length; i++) {
        let pessoa = arrPessoas[i];
        table.innerHTML += `
        <tr>
            <td>${pessoa.realTmb.toFixed(2)}Kcal</td>
            <td>${agua(pessoa.peso).toFixed(2)}L</td>
            <td>${carboidrato(pessoa.peso).toFixed(2)}g</td>
            <td>${proteina(pessoa.peso).toFixed(2)}g</td>
            <td>${gordura(pessoa.peso).toFixed(2)}g</td>
        </tr>
        `;
    }
}

function TMB(peso, altura, idade, sexo) {
    if (sexo === 'homem') {
        return 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
        return 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
}

function carboidrato(peso) {
    return 2 * peso;
}

function proteina(peso) {
    return 1.8 * peso;
}

function gordura(peso) {
    return 0.7 * peso;
}

function realTmb(tmb, fatorA) {
    if (fatorA === 'leve') {
        return tmb * 1.2;
    } else if (fatorA === 'levissimo') {
        return tmb * 1.4;
    } else if (fatorA === 'moderado') {
        return tmb * 1.6;
    } else if (fatorA === 'alta') {
        return tmb * 1.8;
    } else if (fatorA === 'atleta') {
        return tmb * 2;
    }
}

function agua(peso) {
    return 45 * peso;
}

btn.addEventListener('click', cadastrar);
