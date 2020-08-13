### Exercício 1
a) Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. Dessa forma, deve-se especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada.

b) O banco não encontra o id de referência na tabela Movies.

e) Ocorre um erro de restrição de chave estrangeira, teria que excluir primeiro a tabela Rating, pois com a chave estrangeira o banco impede a exclusão.


### Exercício 2

a) A tabela MovieCast representa a relação de N:M, onde vários itens de uma tabela (Movies) se relacionam com vários itens de outra tabela (Actor).

c) O banco não encontra o id de referência na tabela

d) Ocorre um erro de restrição de chave estrangeira, o banco não deixa fazer a exclusão pois o Actor possui relação com outra tabela (MovieCast)


### Exercício 3

a) Para fazermos queries que buscam dados de mais de uma tabela, utilizamos o operador JOIN, que junta os registros das tabelas em uma única resposta de query.
  Podemos passar uma condição pela qual as tabelas serão juntadas (`ON Movies.id = Rating.movie_id;`)
  
### Exercício 4 

a) SELECT m.id AS movie_id, m.name AS title, r.rate AS rating, r.comment AS rating_comment 
FROM Movies AS m
LEFT JOIN Rating AS r 
ON m.id = r.movie_id;

b) SELECT m.id AS movie_id, m.name AS title, mc.actor_id AS actor_id 
FROM Movies AS m
RIGHT JOIN MovieCast AS mc 
ON mc.movie_id = m.id;

c) SELECT AVG(r.rate) AS avarage, m.name AS title 
FROM Movies AS m
LEFT JOIN Rating AS r 
ON m.id = r.movie_id
GROUP BY (m.id);

### Exercício 5

a) Para tabelas se relacionarem, usamos o operador JOIN, e assim buscarmos dados de mais de uma tabela, com ele podemos juntar os registros das tabelas em uma única resposta de query e também podemos passar uma condição pela qual as tabelas serão
juntadas.

b) SELECT m.id AS movie_id, m.name AS title, a.id AS actor_id, a.name AS actor_name 
FROM Movies AS m
LEFT JOIN MovieCast AS mc 
ON m.id = mc.movie_id
JOIN Actor a 
ON a.id = mc.actor_id;

c) Há uma vírgula quando deveria haver um ponto.
SELECT m.id as movie_id, (`m,title`), a.id as actor_id, a.name FROM Movie m

d) SELECT 
	m.id AS movie_id, 
    m.name AS movie, 
    a.id AS actor_id, 
    a.name AS actor_name, 
    r.rate AS rating, 
    r.comment AS comment
FROM Movies AS m
LEFT JOIN Rating AS r 
ON r.movie_id = m.id
LEFT JOIN MovieCast mc 
ON m.id = mc.movie_id
JOIN Actor AS a 
ON a.id = mc.actor_id;
