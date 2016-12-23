INSERT INTO users (email, password, first_name, last_name, birthday, country)
VALUES ($1, $2, $3, $4, $5, $6);
-- RETURNING *;
