SELECT users.*, orders.id AS orderid
FROM users
JOIN orders
  ON orders.userid = users.id
WHERE orders.complete = false;
