SELECT *
FROM orders
WHERE userid = $1 AND complete = true;
