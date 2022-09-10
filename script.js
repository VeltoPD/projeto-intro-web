// Transforme os itens da semana 1 em objetos
Objeto1 = {
    prato1: "baião de dois" ,
    preco1: 29.90 ,
    disponibilidade1: true , 
    ingredientes1: ["feijão", " arroz", " queijo", " linguiça", " carne", " alho", " sal"]
}

Objeto2 = {
    prato2 : "moqueca" , 
    preco2 : 38.50 , 
    disponibilidade2 : false , 
    ingredientes2 : ["peixe", " camarão", " pimentão", " leite de coco", " coentro", " cebola", " sal"]
}

Objeto3 = {
    prato3 : "feijão tropeiro" , 
    preco3 : 18.40 , 
    disponibilidade3 : true , 
    ingredientes3 : ["feijão", " farofa", " linguiça", " ovo", " cheiro-verde", " pimenta", " alho", " sal"]
}

Objeto4 = {
    prato4 : "Vaca atolada" ,
    preco4 : 25.50 , 
    disponibilidade4 : true , 
    ingredientes4 : ["mandioca", " costela bovina", " cheiro-verde", " tomate", " colorau", " cebola", " alho", " sal"]

}

// Crie um array para guardar os objetos
const pratosTipicos = []
 
// Adicione os objetos ao array criado para guarda-los
pratosTipicos.push(Objeto1,Objeto2,Objeto3,Objeto4)

/*Verificar a característica booleana de cada objeto. 
Se for true, adicionar ao array criado para receber objetos.
Se for false, exibir um alert avisando que não foi adicionado*/

if (Objeto1.disponibilidade1 == true) {
    pratosTipicos.push(Objeto1)
} else {
    alert("baião de dois não está disponível")
} // Lembrar do O maiúsculo do Objeto
 
if (Objeto2.disponibilidade2 == true) {
    pratosTipicos.push(Objeto2)
} else {
    alert("moqueca não está disponível")
} //JavaScript é case sensitive

if (Objeto3.disponibilidade3 == true) {
    pratosTipicos.push(Objeto3)
} else {
    alert("feijão tropeiro não está disponível")
} //verificar letras maiúsculas e minúsculas

if (Objeto4.disponibilidade4 == true) {
    pratosTipicos.push(Objeto4)
} else {
    alert("vaca atolada não está disponível")
} 

console.log(pratosTipicos)














/*const mediaDosPratos = (preco1 + preco2 + preco3 + preco4) / 4
console.log("Média dos pratos =", mediaDosPratos.toFixed(2))

const todosDisponiveis = disponibilidade1 &&
    disponibilidade2 && disponibilidade3 && disponibilidade4
console.log("Todos os pratos disponíveis? ", todosDisponiveis)

console.log(`${prato1.toUpperCase()} \nPreço: ${preco1} \nDisponibilidade: ${disponibilidade1} \nIngredientes: ${ingredientes1}`)
console.log(`${prato2.toUpperCase()} \nPreço: ${preco2} \nDisponibilidade: ${disponibilidade2} \nIngredientes: ${ingredientes2}`)
console.log(`${prato3.toUpperCase()} \nPreço: ${preco3} \nDisponibilidade: ${disponibilidade3} \nIngredientes: ${ingredientes3}`)
console.log(`${prato4.toUpperCase()} \nPreço: ${preco4} \nDisponibilidade: ${disponibilidade4} \nIngredientes: ${ingredientes4}`)
*/



