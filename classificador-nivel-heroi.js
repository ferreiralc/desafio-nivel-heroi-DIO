let nomeHeroi = "Hércules"
let xpHeroi = 15000
let nivelHeroi = ""

//if, else if, else
if (xpHeroi <= 1000){
    nivelHeroi = "Ferro"
}
else if (xpHeroi > 1000 && xpHeroi <= 2000){
    nivelHeroi = "Bronze"
}
else if (xpHeroi > 2000 && xpHeroi <=5000){
    nivelHeroi = "Prata"
}
else if (xpHeroi > 5000 && xpHeroi <= 7000){
    nivelHeroi = "Ouro"
}
else if (xpHeroi > 7000 && xpHeroi <=8000){
    nivelHeroi = "Platina"
}
else if (xpHeroi > 8000 && xpHeroi <=9000){
    nivelHeroi = "Ascendente"
}
else if (xpHeroi > 9000 && xpHeroi <=1000){
    nivelHeroi = "Imortal"
}
else if (xpHeroi >=10001){
    nivelHeroi = "Radiante"
}
else {
    console.log ("Nível Heroi não identificado")
}


console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi}`)

//eu tentei usar o swtich case pra não ficar um monte de if else, mas aí descobri que
//as estruturas de switch case não aceitam operações booleanas, então acabei fazendo no if else