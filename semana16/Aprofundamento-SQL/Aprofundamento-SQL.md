### Exercício 1
a) O comando exclui a coluna "salary".
b) O comando irá renomear a coluna "gender" para "sex" e do tipo VARCHAR(6)
c) O comando apenas modificará o quanto de caracteres será aceito na coluna "gender", será VARCHAR(255) 

### Exercício 2
a) UPDATE Actor
SET name = "Antonio Fagundes",	birth_date = "1949-05-20"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c) UPDATE Actor
SET name = "Marcos Caruso", salary = 400000, 
	birth_date = "1954-03-18", gender = "male", 
    Hometown = "São Paulo"
WHERE id = "005";

d) O código executou sem erros, mas como o id erá inválido, a tabela não sofreu nenhuma alteração.


### Exercício 3
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor 
WHERE salary > 1000000;


### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor
WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor
WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;


### Exercício 5

a) É mostrado a quantidade de Atores do sexo masculino e feminino da tabela.

b) SELECT id, name FROM Actor
ORDER BY name DESC;

c) SELECT * FROM Actor
ORDER BY salary;

d) SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;


### Exercício 6

a) ALTER TABLE Movies 
ADD playing_limit_date DATE;

b) ALTER TABLE Movies CHANGE rating rating FLOAT;

c) UPDATE Movies
SET	playing_limit_date = "2020-08-30"
WHERE id = "002";

UPDATE Movies
SET	playing_limit_date = "2020-04-30"
WHERE id = "003";

d) O comando executou sem erros, mas nenhuma linhas foi alterada


### Exercício 7

a) SELECT COUNT(*) FROM Movies 
WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movies;

c) SELECT COUNT(*) FROM Movies 
WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) FROM Movies 
WHERE release_date < CURDATE();

e) SELECT MAX(rating) FROM Movies;

f) SELECT MIN(rating) FROM Movies;

### Exercício 8

a) SELECT * FROM Movies 
ORDER BY name;

b) SELECT * FROM Movies 
ORDER BY name LIMIT 5;

c) SELECT * FROM Movies
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d) SELECT * FROM Movies
ORDER BY rating DESC 
LIMIT 3;
