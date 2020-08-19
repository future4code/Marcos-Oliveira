### Exercício 1

a) rounds: Também chamado cost (custo - numérico) que está relacionado à
segurança da senha. Quanto maior o cost, maior o tempo de execução do algoritmo.
salt: é uma string, que é aleatória na senha (ou texto) antes de criar o hash.
A recomendação é utilizar o maior que conseguir para os equipamentos utilizados rodarem no tempo desejado.
Round de 12, por ser o padrão na maioria das libs


### Exercício 2
a) Primeiro o endpoint de cadastro, para que a senha seja salva no banco como cypherText.
   
d) Não, porque esse endpoint faz apenas a verificação se existe um token válido. 
