CREATE DATABASE college;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user1 (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 18),
    PRIMARY KEY (id)
);

INSERT INTO user1 
(id, age, name, email, followers, following)
VALUES
(1, 18, "adam", "adam@yahoo.in", 123, 145),
(2, 19, "bob", "bob123@yahoo.in", 200, 200),
(3, 19, "casey", "casey@yahoo.in", 300, 306),
(4, 24, "donald", "donald@yahoo.in", 200, 105);

INSERT INTO user1 
(id, age, name, email, followers, following)
VALUES
(5, 28, "eve", "eve@yahoo.in", 400, 145),
(6, 29, "farah", "farah@yahoo.in", 10000, 1000);

INSERT INTO user1 
(id, name, email, following)
VALUES
(7, "gemini", "gem@yahoo.in", 120);

ALTER TABLE user1
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user1
DROP COLUMN age;

ALTER TABLE user1
RENAME TO instaUser;

ALTER TABLE instaUser
RENAME TO user1;

ALTER TABLE user1
CHANGE COLUMN followers subs INT DEFAULT 0; 

ALTER TABLE user1
MODIFY subs INT DEFAULT 5;

SET SQL_SAFE_UPDATES = 0;

UPDATE user1
SET followers = 600
WHERE age = 19;

SELECT * FROM user1;

DELETE FROM user1
WHERE age = 18;

SELECT name, age, email 
FROM user1
WHERE age IN (20, 29);

SELECT name, age, email 
FROM user1
WHERE age NOT IN (20, 29);

SELECT name, age, email 
FROM user1
WHERE age IN (20, 29);

SELECT * FROM user1;

SELECT *
FROM user1 
WHERE followers >= 200;

SELECT name, age 
FROM user1
WHERE age + 1 = 19;

SELECT name, age 
FROM user1
WHERE age > 19
LIMIT 2;

SELECT name, age, email
FROM user1
LIMIT 3;

SELECT name, age 
FROM user1
WHERE age > 15 OR followers > 200;

SELECT name, age 
FROM user1
WHERE age BETWEEN 17 AND 19;

SELECT name, age, followers
FROM user1 
WHERE email IN ("bob123@yahoo.in", "donald@yahoo.in","casey@yahoo.in");

SELECT DISTINCT age FROM user1;

SELECT name, age, followers 
FROM user1
ORDER BY followers ASC;

SELECT name, age, followers 
FROM user1
ORDER BY followers DESC;

SELECT name, age, followers 
FROM user1
ORDER BY followers;

SELECT max(followers)
FROM user1;

SELECT max(age)
FROM user1;

SELECT count(age)
FROM user1
WHERE age = 19;

SELECT min(age)
FROM user1;

SELECT avg(age)
FROM user1;

SELECT sum(followers)
FROM user1;

SELECT age, COUNT(id)
FROM user1
GROUP BY age;

SELECT age, max(followers)
FROM user1
GROUP BY age;

SELECT age, max(followers)
FROM user1
GROUP BY age
HAVING max(followers) > 200;

SELECT age, max(followers)
FROM user1
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

TRUNCATE TABLE user1;
SELECT * FROM user1;

DROP TABLE post1;

CREATE TABLE post1 (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user1 (id)
);



    