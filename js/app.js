let btn = document.getElementById('btn')
let table = document.getElementById('resultado')

let arrPessoa = []

function cadastrar() {

    let pessoa = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value,

        imc: IMC(document.getElementById('peso').value, document.getElementById('altura').value),

        categoriaDoImc: categoriaIMC(IMC(document.getElementById('peso').value, document.getElementById('altura').value)),
    }

    arrPessoa.push(pessoa)

    console.log(arrPessoa)



    imprimir()
}

function imprimir() {


    table.innerHTML =''
    for (let i = 0; i < arrPessoa.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${arrPessoa[i].nome} </td>
            <td> ${arrPessoa[i].sobrenome}</td>
            <td>${arrPessoa[i].categoria}</td>
            <td> ${arrPessoa[i].imc.toFixed(2)}</td>
            <td> ${arrPessoa[i].categoriaDoImc}</td>
        </tr>
      
        `
    }



   
}

function IMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function categoriaIMC(imc) {

    if (imc <= 18.5) {
        return 'Abaixo do normal'
    } else if (imc <= 24.9) {
        return 'Normal'
    } else if (imc <= 29.9) {
        return 'Sobre peso'
    } else if (imc <= 34.9) {
        return 'Obesidade Grau I'
    } else if (imc <= 39.9) {
        return 'Obesidade Grau II'
    } else {
        return 'Obesidade Grau III'
    }
}


btn.addEventListener('click', cadastrar)