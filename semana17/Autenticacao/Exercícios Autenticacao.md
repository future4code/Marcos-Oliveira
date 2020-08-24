### Exercício 1

a) Utilizando strings o número de combinações é extremamente alto, diferentemente das combinações se usasemos apenas números.

### Exercício 2
a) Com o knex estabelecemos uma conexão com o Mysql, e criamos as variáveis de ambiente para podermos acessar o nosso banco (process.env.NOME_DA_VARIAVEL), as informações de acesso ficam no arquivo .env
   A função createUser cria um novo usuário na tabela "User".
   
b) CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


### Exercício 3

a) O parâmetro "secret" que está sendo passado, precisa ser passado apenas como string 