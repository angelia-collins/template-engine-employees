// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

class Employee {
    constructor(name, role, id, email, github) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

// const questions = () =>
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Employee name?',
//     },
//     {
//       type: 'input',
//       name: 'role',
//       message: 'Employee role?',
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'Employee ID?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'Employee email?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Employee github?',
//     },
//   ])
//     .then((answers) => {
//       console.log(JSON.stringify(answers, null, '  '));
//       return answers;

//     });

module.exports = Employee;