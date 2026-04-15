function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var vel = Number(txtv.value)
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h</p>`
    if (vel > 60){
        res.innerHTML += `<p>Você ultrapassou o limite de velocidade e foi <strong>multado!</strong></p>`
    }
    else if (vel < 30){
        res.innerHTML += `<p>Você está abaixo do minimo permitido e foi <strong>multado!</strong></p>`
    }
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`
}

function verificar() {
    var nac = document.querySelector('input#nac').value
    var res2 = document.querySelector('div#res2')
    if (nac == 'brasileiro') {
        res2.innerHTML = 'Você é brasileiro!'
    }
    else {
        res2.innerHTML = `Você é estrangeiro!`
    }
}
