INSERT INTO users (email, password, first_name, last_name, birthday, country, announcements, media, news)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
-- RETURNING *;
