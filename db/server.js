const connection = require("./connection");

class DB {

    constructor(connection) {
        this.connection = connection;
    }
    findAllEmployees() {

        return this.connection.query(
            "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id LEFT JOIN employee manager on manager.manager_id = employee.manager_id;"
        );
    }
    findAllPossibleManagers(employeeId) {

        return this.connection.query(

            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        );

    }
    createEmployee(employee) {

        return this.connection.query("INSERT INTO employee SET ?", employee);

    }

    removeEmployee(employeeId) {

        return this.connection.query(

            "DELETE FROM employee WHERE id = ?",
            employeeId
        );

    }
    updateEmployeeRole(employeeId, roleId) {

        return this.connection.query(

            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );

    }
    updateEmployeeManager(employeeId, managerId) {

        return this.connection.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",
            [managerId, employeeId]
        );
    }
    findAllRoles() {

        return this.connection.query(
            "SELECT role.role_id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.role_id = department.department_id;"
        );
    }
    createRole(role) {

        return this.connection.query("INSERT INTO role SET ?", role);
    }
    removeRole(roleId) {

        return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
    }
      findAllDepartments() {

        return this.connection.query(

            "SELECT department.department_id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id GROUP BY department.department_id, department.name;"
        );

    }

    // Create new department

    createDepartment(department) {

        return this.connection.query("INSERT INTO department SET ? ", department);

    }

    removeDepartment(departmentId) {

        return this.connection.query(
            "DELETE FROM department WHERE id = ?",
            departmentId        
        );
    }
    // Find employees in each department with roles to display titles
    findAllEmployeesByDepartment(departmentName) {
        console.log(departmentName);
        var queryString = "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title FROM employee JOIN role on employee.role_id = role.role_id JOIN department on role.department_id = department.department_id WHERE department.name  = " + departmentName + ";";

        return this.connection.query(queryString);
    }
    findAllEmployeesByManager(managerId) {
        return this.connection.query(
            "SELECT employee.employee_id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.role_id = employee.role_id LEFT JOIN department ON department.department_id = role.department_id WHERE manager_id = ? ;",
            managerId
        );
    }
}
module.exports = new DB(connection);
