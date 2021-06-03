//*Se o valor do etanol custar até 70% do valor da gasolina, o valor do etanol será mais vantajoso.\\*

let etanol, gasolina;
function calcular (){
     etanol = parseFloat (frmFlex.txtEtanol.value.replace(",","."));
     gasolina = parseFloat (frmFlex.txtGasolina.value.replace(",","."));
     if(gasolina > etanol){
         document.getElementById("status").src="imagens/etanol.jpg";
     }else{
        document.getElementById("status").src="imagens/gasolina.jpg";
     } 
}
function resetar (){
    document.getElementById("status").src="imagens/neutro.jpg";
}

