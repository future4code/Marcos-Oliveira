### Exercício 1
a) CREATE TABLE usamos para criar uma tabela; VARCHAR cria strings de no máximo n caracteres; PRIMARY KEY identifica exclusivamente cada registro em uma tabela; NOT NULL força uma coluna para NÃO aceitar valores NULL; DATE representa uma data (YYYY-MM-DD).

b) SHOW DATABASES retorna o nome do banco ao qual estamos conectados; SHOW TABLES exibe as tabelas existentes no banco.

c) DESCRIBE Actor, exibiu os campos e tipos da tabela Actor


### Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");

b) Entrada duplicada "002" para a chave "Primária". Não pode existir valores iguais de chave primária.

c) "A contagem de colunas não corresponde à contagem de valores na linha 1". Foram passados o nome de apenas 3 campos para o preenchimento de informações (id, name, salary), mas o número de elementos passados foram 5.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

d) "O campo "nome" não tem um valor padrão". Por o campo "name" ser NOT NULL, ele não pode ficar em branco
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("004", "Regina Casé", 400000, "1949-04-18", "male");

e) "Valor de data incorreto para a coluna "birth_date" na linha 1". A data precisa ser passada entre " ".
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

### Exercício 3

a) SELECT * from Actor 
   WHERE gender = "female";
   
b) SELECT name, salary from Actor 
   WHERE name = "Tony Ramos";
   
c) SELECT * from Actor 
   WHERE gender = "invalid";
   Não é encontrado nenhuma informação, pois a restrição não corresponde a nenhuma informação da tabela
   
d) SELECT id, name, salary from Actor 
   WHERE salary <= 500000;
   
e) "Coluna desconhecida "nome" na lista de campos". Campo nome não existe na tabela. 
    SELECT id, name from Actor 
    WHERE id = "002";
    

### Exercício 4

a) SELECT * FROM Actor
   WHERE (name NOT LIKE "A%") AND salary > 350000;
   
b) SELECT * FROM Actor
   WHERE (name LIKE "%G%" OR name LIKE "%g%");
   
c) SELECT * FROM Actor
   WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
   AND salary BETWEEN 350000 AND 900000;
   
   
### Exercício 5

a) CREATE TABLE Movies (
     id VARCHAR(255) PRIMARY KEY,
     name VARCHAR (255) NOT NULL,
     sinopse TEXT NOT NULL,
     release_date DATE NOT NULL,
     evaluation INT NOT NULL
   );
   TEXT não tem um limite específico de tamanho além do máximo do banco de dados.
   
   
b) INSERT INTO Movies (id, name, sinopse, release_date, evaluation)
VALUES ("001", "Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);


c) INSERT INTO Movies (id, name, sinopse, release_date, evaluation)
VALUES ("002", "Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e 
amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);


d) INSERT INTO Movies (id, name, sinopse, release_date, evaluation)
VALUES ("003", "Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina 
nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);


e) INSERT INTO Movies (id, name, sinopse, release_date, evaluation)
VALUES ("004", "O Palhaço", 
"O Palhaço conta a história de Benjamin e seu pai Valdemar, dois palhaços que trabalham num circo 
mambembe, de propriedade deles, durante os anos 70. Frustrado, Benjamin decide abandonar a vida 
artística e trabalhar numa empresa de uma cidade distante. Isso afeta a vida de todos, inclusive a 
dele.", "2011-10-28", 9);


### Exercício 6

a) SELECT id, name, evaluation from Movies 
   WHERE id = "002
  
b) SELECT * FROM Movies
   WHERE name = "O Palhaço";
   
c) SELECT id, name, sinopse from Movies 
   WHERE evaluation >= 7;
   
   
### Exercício 7

a) SELECT * from Movies 
  WHERE name LIKE "%vida%";
  
b) SELECT * FROM Movies
   WHERE name LIKE "%flor%" OR sinopse LIKE "%Palhaço%";
   
c) SELECT * FROM Movies
   WHERE release_date < "2020-08-10";
   
d) SELECT * FROM Movies
   WHERE release_date < "2020-08-10" AND 
   (name LIKE "%dona%" OR
   sinopse LIKE "%Palhaço%") AND evaluation > 7;
