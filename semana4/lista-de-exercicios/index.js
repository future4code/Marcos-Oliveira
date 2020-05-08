// Exercícios de interpretação de código

/* 1. Cria uma função 'conversorDeMoeda' que recebe um parâmetro (valorEmDolar). Dentro da função a variável 
      'cotacao' recebe um Number pelo prompt informando a cotação do dólar, e retorna o valor passado no parâmetro
      multiplicado pela variável 'cotacao', que armazenou o valor informado no prompt.
      A variável 'meuDinheiro' recebe a função 'conversorDeMoeda' com parâmetro 100.
      'meuDinheiro' é exibida no console. Caso valor informado no prompt seja 6, o valor exibido no console será 600.
      
    2. Cria uma função 'investeDinheiro' com dois parâmetros (tipoDeInvestimento, valor). Dentro da função contém 
       uma variável 'valorAposInvestimento' e um 'Switch' que analisa a string recebida no parâmetro 'tipoDeInvestimento'.
       Caso (case) tipoDeInvestimento seja "Poupança" a variável valorAposInvestimento será igual o 'valor' passado como 
       parâmetro multiplicado por 1.03, assim sendo com as outras opções: (case "Renda fixa" * 1.05), ("CDB" * 1.06), 
       ("Ações" * 1.1), a opção default será caso tipoDeInvestimento não esteja dentre essas opções (será mostrado um alert)
       A função retorna 'valorAposInvestimento'.
       A variável novoMontante recebe a função com os parâmetros ("Ações", 150)
       A variável segundoMontante recebe a função com os parâmetros("Tesouro Direto", 200)
       É impresso no console 'novoMontante' com valor 165. 'segundoMontante' exibe o alert

    3. Cria o array 'numeros' com valores e os arrays 'array1' e 'array2' vazios.
       Com o 'for of' para iterar no array 'numeros', é feito uma condição com 'if'; se o resto da divisão por 2 for 0,
       este valor é adicionado no array1 (array1.push(numero)), Se for diferente de 0, o valor é adicionado no array2 (array2.push(numero))
       No console é impresso a quantidade total de números no array 'numeros' (14), e os valores contidos nos array1 (6) e array2 (8).
       
    4. Cria um array 'numeros' duas variáveis, 'numero1' com valor 'Infinity' e 'numero2' com valor 0.
       Dentro de um 'for of' testa-se duas condições.
       1ª ------ 
       2ª Para cada iteração no array numeros, o valor for maior que a variável numero2, a mesma recebe o valor do array. Para esse teste
       é exibo no console o valor 1590.

*/
