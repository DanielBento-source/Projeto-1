const prompt = require('prompt-sync')();

console.log ('Nos tempos modernos nos deparamos a cada dia mais com a sociedade sendo auxiliada em diversos âmbitos como carreira, relacionamentos, e como utilizar o seu tempo ocioso para se divertir com qualidade e realismo. Porém, vemos cada vez menos o olhar voltado a Saúde, principalmente da classe trabalhadora. John é um rapaz de 25 anos que mora em Campinas, São Paulo, ele estuda para passar no vestibular de noite e trabalha na oficina do seu Jair durante toda manhã e tarde para ajudar seus pais financeiramente, praticamente não lhe sobra tempo pra mais nada. Apesar da pouca idade John foi diagnosticado com Diabetes e Preção alta e precisa urgente aderir um estilo de vida Saudável. O médico receitou a John o seguinte:  fazer uma dieta ,  se exercitar, dormir melhor, ter uma namorada, fazer novos amigos.')

var soma = [];


    console.log('John vai conseguir fazer dieta?')
    var questao1 = prompt('sim ou não ').toLowerCase();
if (questao1 == 'sim'){
    soma.push('sim');
}

console.log('')

    console.log('John vai conseguir se exercitar?')
    var questao1 = prompt('sim ou não ').toLowerCase();
if (questao1 == 'sim'){
    soma.push('sim');
}

console.log('')

    console.log('John vai conseguir dormir melhor?')
    var questao1 = prompt('sim ou não ').toLowerCase();
if (questao1 == 'sim'){
    soma.push('sim');
}

console.log('')

    console.log('John vai conseguir uma namorada?')
    var questao1 = prompt('sim ou não ').toLowerCase();
if (questao1 == 'sim'){
    soma.push('sim');
}

console.log('')

    console.log('John vai conseguir fazer novos amigos?')
    var questao1 = prompt('sim ou não ').toLowerCase();
if (questao1 == 'sim'){
    soma.push('sim');
}

console.log('')

if (soma.length == 5){
    console.log('John vai ter uma vida extremamente saudável, e será exemplo pra muitas pessoas! ')
}

else if (soma.length == 4){
    console.log('John vai ter uma vida saudável, embora tenha suas limitações.')
}

else if (soma.length == 3){
    console.log('John vai viver bem, mas os problemas de saúde vão ser recorrentes.')
}


else if (soma.length >= 1){
    console.log('John vai passar a vida se medicando e frequentando hospitais.')
}

else  {
    console.log('John não vai ter uma vida longa')
}


console.log('')
