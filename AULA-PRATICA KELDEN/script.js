function imprimirIdentificacao(){
    const identifacao = {nome:"Kelden", dataNascimento:"24/06/2003", nacionalidade:"Moçambicano"};
    return "Nome: "+ identifacao.nome + "<br>" +
           "Data de Nascimento: " +identifacao.dataNascimento + "<br>" +
           "Nacionalidade: "+ identifacao.nacionalidade;
}
function imprimir_1_a_10(){
    const array=[];
    let cont = 0;
    for(var i =1; i<= 10; i++){
        array[cont] = i;
        cont++;
    }
    return array;
}
function impar(){
    const array = [];
    let cont = 0;
    
    for(var i = 0; i<= 100; i++){
        if(i % 2 !== 0){
            array[cont] = i;
            cont++

        }
    }
    return array;
}
function tabuada(){
    const array = [];
    let cont = 0;
    for(var i = 0; i < 12;i++){
        array[cont]= "8 "+"x "+(i+1)+" = "+(8*(i+1)) +"<br>";

        cont++;
    }
    return array;
}
function soma(){
    const array = [];
    let cont = 0;
    let aux = 0;
    for(var i =0; i< 10; i++){
        array[cont] = cont+i;
        aux++;
    }
    return array;
}
function media(){
    const array = [10, 20, 30, 40, 50];
    let soma = 0;
    let media = 0; 
    for(var i = 0; i < array.length; i++){
        soma += array[i];
    }
    media = soma/array.length;
    document.getElementById('array');
    
    //console.log(array);
    return media;
}



