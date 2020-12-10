const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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
    }
  ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));
      switch (answers.role) {
        case 'Intern':
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          console.log(intern);
          break;
        case 'Manager':
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
          console.log(manager);
          break;
        case 'Engineer':
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          console.log(engineer);
          break;
        default:
          console.log(`None of the cases matched`);

          let everyone = "hello";
          console.log(everyone);
        }
      
          // let everyone = [];
          // let everyone = [intern, manager, engineer];

          // const team = async () => {
            // everyone = await questions();
          // everyone.push(Intern, Manager, Engineer);
          // console.log(everyone);

          // team();
          // fs.writeFile(render());
          // console.log('html made.');
          //  }
         
        
      

    })

questions();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
