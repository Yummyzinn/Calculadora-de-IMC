function exibirAlerta() { 
    
      var massa = document.getElementById('botao').value;
      var altura = document.getElementById('botao2').value;
      
      if (massa > 0 && altura > 0) {
      var imc = massa/(altura*altura)
      alert('o seu imc é ' + imc.toFixed(2))
           
        }else if (isNaN(massa) || isNaN(altura) ) {
            alert('insira um valor numérico')
        }

       
      
      else if(massa == '' || altura == '')  {
      alert(' preencha os campos ');
       } 
       else if(massa<0 || altura<0) {
        alert('insira valores positivos')
       }


      }   
       
       
      
             






















