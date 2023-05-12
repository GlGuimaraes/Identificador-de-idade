function verificar() {
    let ano = window.document.getElementById('ano_nascimento')
    let result_ano = Number(ano.value)
    let centro = window.document.getElementById('final_centro')

    if (result_ano <= 1963) {
        centro.innerHTML = `<br> <h3>Sua idade é ${2023 - result_ano} Você é um idoso</> <br> <br><img src="./imagens/idoso.png" alt="idoso" class='idoso'>`
    }
    if (result_ano >= 1964) {
        centro.innerHTML = `<br> <h3>Sua idade é ${2023 - result_ano} Você é um Adulto</> <br> <br><img src="./imagens/adulto.png" alt="adulto" class='adulto'>`
    }   
    if (result_ano >= 2006) {
        centro.innerHTML = `<br> <h3>Sua idade é ${2023 - result_ano} Você é um Jovem</> <br> <br><img src="./imagens/jovem.png" alt="jovem" class='jovem'>`
    }
    if (result_ano >= 2009) {
        centro.innerHTML = `<br> <h3>Sua idade é ${2023 - result_ano} Você é uma Criança</> <br> <br><img src="./imagens/criança.png" alt="criança" class='criança'>`
    }
    if (result_ano >= 2020) {
        centro.innerHTML = `<br> <h3>Sua idade é ${2023 - result_ano} Você é um Bebe</> <br> <br><img src="./imagens/bebe.png" alt="bebe" class='bebe'>`
    }
}