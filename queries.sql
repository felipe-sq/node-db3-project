-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT 
    p.productname,
    c.categoryname
FROM Product as p
LEFT JOIN Category as c
    ON p.categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT 
    o.id,
    o.orderdate,
    o.shipvia,
    s.companyname,
    s.id
FROM Orders as o
LEFT JOIN Shipper as s
    ON o.shipvia = s.id
WHERE o.orderdate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT
    orderid,
    productid,
    productname,
    quantity
FROM OrderDetail as od
LEFT JOIN Product as p
    ON od.productid = p.id
WHERE orderid = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT
    o.id as "Order ID",
    o.shipname as "Customer Co. Name",
    e.lastname as "Employee Lastname"
FROM Orders as o
LEFT JOIN Employee as e
    ON o.employeeid = e.id;