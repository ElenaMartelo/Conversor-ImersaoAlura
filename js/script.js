function ConverterReal(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    
    var valorEmReal = valorEmDolarNumerico * 5;
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    
    var valorEmEuro = valorEmDolarNumerico * 5.54;
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em euro é €" + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterBitcoin(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    
    var valorEmBitcoin = valorEmDolarNumerico * 0.000026;
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em bitcoin é ₿" + valorEmBitcoin;
    elementoValorConvertido.innerHTML = valorConvertido;
  }