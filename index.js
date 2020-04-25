const inquirer = require("inquirer");



inquirer.prompt([
    {
        type: "checkbox",
        name: "firstq",
        massage:"What would you like to do?",
        choices:["View All Employees", "Add Employee", "Update Employee", "Update Employee Role", "View Employees by Manager", "Delete Employee"]
    },
   
  
]).then(answers => {
      console.log(answers);

if (answers.firstq === "View All Employees") {


}
if (answers.firstq === "Add Employee") {


}

if (answers.firstq === "Update Employee") {


}
if (answers.firstq ==="Update Employee Role") {


}
if (answers.firstq === "View Employees by Manager") {


}
if (answers.firstq === "Delete Employee") {


}





}) 


// function ()





