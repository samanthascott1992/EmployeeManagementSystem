use employees_DB;


INSERT INTO department

VALUES
(01, 'Bakery'),
(02,'Kitchen'),
(03,'FoodTruck'),
(04,'FrontEnd');

INSERT INTO role
(title, salary, department_id)
VALUES
('Bakery Lead', 100000, 1),
('Bakery Assistant', 80000, 1),
('Head Chef', 150000, 2),
('Sous Chef', 120000, 2),
('Cook', 160000, 3),
('Cashieer', 125000, 3),
('Front End Lead', 250000, 4),
('Sales', 190000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Samantha', 'Scott', 1, NULL),
('Cameron', 'Scott', 2, 1),
('Spencer', 'Scott', 3, NULL),
('Cameron', 'Scott', 4, 3),
('Eric', 'Scott', 5, NULL),
('Krissy','Scott', 6, 5),
('Leslie', 'Scott', 7, NULL),
('Craig', 'Scott', 8, 7);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

