const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let everyone = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'Which role?',
      choices: ['Intern', 'Manager', 'Engineer'],
    },
    {
      type: 'input',
      name: 'school',
      message: 'Intern School?',
      when: (answers) => answers.role === "Intern"
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Managers Office Number?',
      when: (answers) => answers.role === "Manager"
    },
    {
      type: 'input',
      name: 'github',
      message: 'Github username?',
      when: (answers) => answers.role === "Engineer"
    },
    {
      type: 'list',
      name: 'again',
      message: 'Add another employee?',
      choices: ['Yes', 'No']
  } 
  ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));
      switch (answers.role) {
        case 'Intern':
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          everyone.push(intern);
          console.log(everyone);
          break;
        case 'Manager':
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
          everyone.push(manager);
          console.log(everyone);
          break;
        case 'Engineer':
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          everyone.push(engineer);
          console.log(everyone);
          break;
        default:
          console.log(`None of the cases matched`);
        }
        if (answers.again === "Yes") {
          questions();
      } else {
        const renderedHTML = render(everyone);
        fs.writeFile(outputPath, renderedHTML, (err) => {
          if (err) console.log(err)
          console.log('new html file rendered')
      })
      }

         
      
    })

questions();
