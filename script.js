const prato1 = "baião de dois"
const preco1 = 29.90
const disponibilidade1 = true
const ingredientes1 = ["feijão"," arroz"," queijo"," linguiça"," carne"," alho"," sal"]

const prato2 = "moqueca"
const preco2 = 38.50
const disponibilidade2 = false
const ingredientes2 = ["peixe"," camarão"," pimentão"," leite de coco"," coentro"," cebola"," sal"]

const prato3 = "feijão tropeiro"
const preco3 = 18.40
const disponibilidade3 = true
const ingredientes3 = ["feijão"," farofa"," linguiça"," ovo"," cheiro-verde"," pimenta"," alho"," sal"]

const prato4 = "Vaca atolada"
const preco4 = 25.50
const disponibilidade4 = true
const ingredientes4 = ["mandioca"," costela bovina", " cheiro-verde"," tomate"," colorau"," cebola"," alho"," sal"]

const mediaDosPratos = (preco1 + preco2 + preco3 + preco4) / 4
console.log("Média dos pratos =", mediaDosPratos.toFixed(2))
 
const todosDisponiveis = disponibilidade1 && 
disponibilidade2 && disponibilidade3 && disponibilidade4
console.log("Todos os pratos disponíveis? ", todosDisponiveis)

console.log(`${prato1.toUpperCase()} \nPreço: ${preco1} \nDisponibilidade: ${disponibilidade1} \nIngredientes: ${ingredientes1}`)
console.log(`${prato2.toUpperCase()} \nPreço: ${preco2} \nDisponibilidade: ${disponibilidade2} \nIngredientes: ${ingredientes2}`)
console.log(`${prato3.toUpperCase()} \nPreço: ${preco3} \nDisponibilidade: ${disponibilidade3} \nIngredientes: ${ingredientes3}`)
console.log(`${prato4.toUpperCase()} \nPreço: ${preco4} \nDisponibilidade: ${disponibilidade4} \nIngredientes: ${ingredientes4}`)




