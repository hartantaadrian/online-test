SELECT u1.id,u1.username ,u2.username
AS parentusername FROM user u1 left JOIN user u2 ON u1.parent = u2.id
GROUP BY u1.id
