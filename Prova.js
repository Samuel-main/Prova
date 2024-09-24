class Produto {
    constructor(nome, preco, validade) {
        this.nome = nome
        this.preco = preco
        this.validade = validade

    }
}

const produto1 = new Produto("Arroz \n", 7, 2024)
const produto2 = new Produto("Feijão \n", 6, 2023)
const produto3 = new Produto("carne \n", 23, 2024)
const produto4 = new Produto("Macrrão \n", 5, 2023)
const produto5 = new Produto("Frango \n", 20, 2024)
const produto6 = new Produto("batata \n", 3, 2023)
const produto7 = new Produto("Maça \n", 4, 2024)
const produto8 = new Produto("Banana \n", 5, 2023)
const produto9 = new Produto("chocolate \n", 6, 2024)
const produto10 = new Produto("Café \n", 10, 2023)

let total = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10]

alert(produto1.nome + produto2.nome + produto3.nome + produto4.nome + produto5.nome + produto6.nome + produto7.nome + produto8.nome + produto9.nome + produto10.nome)
// for (i = 0; i < total; i++, i = 10) break
let usuario = prompt("Qual produto deseja?")
if (usuario == "arroz") {
    alert("O preço é: " + produto1.preco)
}
else if(usuario == "feijão") {
    alert("O preço é: " + produto2.preco)
}
else if(usuario == "carne") {
    alert("O preço é: " + produto3.preco)
}
else if (usuario == "macarrão") {
    alert("O preço é: " + produto4.preco)
}
else if (usuario == "frango") {
    alert("O preço é: " + produto5.preco)
}
else if (usuario == "batata") {
    alert("O preço é: " + produto6.preco)
}
else if (usuario == "maça") {
    alert("O preço é: " + produto7.preco)
}
else if (usuario == "banana") {
    alert("O preço é: " + produto8.preco)
}
else if (usuario == "chocolate") {
    alert("O preço é: " + produto9.preco)
}
else if (usuario == "café") {
    alert("O preço é: " + produto10.preco)
}else{
    alert("erro")
}
let usuario2 = prompt("Deseja comprar?")
if (usuario2 == "sim") {
    alert("ta bem")
} else {
    alert("tchau")
}let usuario3 = prompt("deposite o valor")

if (usuario3 == "7") {
    alert("O validae é: " + produto1.validade)
}
else if(usuario3 == "6") {
    alert("O validade é: " + produto2.validade)
}
else if(usuario3 == "23") {
    alert("O validae é: " + produto3.validade)
}
else if (usuario3 == "5") {
    alert("O validade é: " + produto4.validade)
}
else if (usuario3 == "20") {
    alert("O validade é: " + produto5.validade)
}
else if (usuario3 == "3") {
    alert("O validade é: " + produto6.validade)
}
else if (usuario3 == "4") {
    alert("O validade é: " + produto7.validade)
}
else if (usuario3 == "5") {
    alert("O validae é: " + produto8.validade)
}
else if (usuario3 == "6") {
    alert("O validae é: " + produto9.validade)
}
else if (usuario3 == "10") {
    alert("O validae é: " + produto10.validade)
}else{
    alert("erro")
}
