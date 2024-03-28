export default class ServicoExercicio {

    Somar(num1, num2){
      if(num1 === undefined || num2 === undefined){
        throw new Error("Não é possivel fazer operações sem os dois campos");
      }else{
        if(!isNaN(num1) && !isNaN(num2)){    
          return (num1 + num2);
        }else{
          throw new Error("Não é possivel fazer operações com letras");
        }
      }
    }

    Subtrair(num1, num2){
      if(num1 === undefined || num2 === undefined){
        throw new Error("Não é possivel fazer operações sem os dois campos");
      }else{
        if(!isNaN(num1) && !isNaN(num2)){    
          return (num1 - num2);
        }else{
          throw new Error("Não é possivel fazer operações com letras");
        }
      }
    }

    Dividir(num1, num2){
      if(num1 === undefined || num2 === undefined){
        throw new Error("Não é possivel fazer operações sem os dois campos");
      }else{
        if(!isNaN(num1) && !isNaN(num2)){    
          return (num1 / num2);
        }else{
          throw new Error("Não é possivel fazer operações com letras");
        }
      }
    }

    Multiplicar(num1, num2){
      if(num1 === undefined || num2 === undefined){
        throw new Error("Não é possivel fazer operações sem os dois campos");
      }else{
        if(!isNaN(num1) && !isNaN(num2)){    
          return (num1 * num2);
        }else{
          throw new Error("Não é possivel fazer operações com letras");
        }
      }
    }

}