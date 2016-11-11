SELECT users.*, ord.id AS orderid
FROM users
JOIN orders ord
ON ord.userid = users.id
WHERE ord.complete = false;
