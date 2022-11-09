function Gerar() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ' '
        for (let c = 0; c <= 20; num*=c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${tab}`
            tab.appendChild(item)   
        }
    }
}