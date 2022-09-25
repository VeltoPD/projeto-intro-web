
const pratosTipicos = [
    {
        prato: "baião de dois",
        preco: 29.90,
        disponibilidade: true,
        ingredientes: ["feijão", " arroz", " queijo", " linguiça", " carne", " alho", " sal"]
    },
    {
        prato: "moqueca",
        preco: 38.50,
        disponibilidade: false,
        ingredientes: ["peixe", " camarão", " pimentão", " leite de coco", " coentro", " cebola", " sal"]
    },
    {
        prato: "feijão tropeiro",
        preco: 18.40,
        disponibilidade: true,
        ingredientes: ["feijão", " farofa", " linguiça", " ovo", " cheiro-verde", " pimenta", " alho", " sal"]
    },
    {
        prato: "Vaca atolada",
        preco: 25.50,
        disponibilidade: true,
        ingredientes: ["mandioca", " costela bovina", " cheiro-verde", " tomate", " colorau", " cebola", " alho", " sal"]
    }
]


// Guarde todos os valores da propriedade array dos objetos em uma mesma string
for (const prato of pratosTipicos) {
    console.log(prato.ingredientes.join(', '))
}


// Exiba cada item da constante pratosTipicos a partir de uma iteração do laço
for (const prato of pratosTipicos) {
    for (propriedade in prato) {
        console.log(`${propriedade}: ${prato[propriedade]}`)
    }
    console.log("--------------------------")
}


// Crie uma função que receba como parâmetro um objeto, e devolva a string de pratosTipicos
// com os dados do objeto
function relatorio(pratosTipicos) {
    let string_relatorio = '';
    for (const prato of pratosTipicos) {
        for (propriedade in prato) {
            string_relatorio += `${propriedade}: ${prato[propriedade]} `;
        } 
    }
    return string_relatorio;
}
console.log(relatorio(pratosTipicos));


//Crie uma função que recebe um array de objetos e uma string. Essa função deve retornar
//um objeto, e o objeto retornado deve possuir apenas os itens que contenham o nome/título
//igual a string passada como parâmetro. Caso não exista o item, exiba um alert indicando não encontrado.
function busca_item(pratosTipicos, item_procurado) {
    let encontrou_item = false;
    for (const prato of pratosTipicos) {
        for (propriedade in prato) {
            if (prato['prato'] == item_procurado) {
                encontrou_item = true;
                return prato;
            }
        }
    }
    if (encontrou_item == false) {
        alert('Item nao encontrado');
        return 0;
    }
}
console.log(busca_item(pratosTipicos, 'baião de dois'));


















