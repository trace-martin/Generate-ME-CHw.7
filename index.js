// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a Title for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', 'N/A']
    },
    {
        type: 'input',
        message: 'Who can contribute to this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are the tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'How can someone get intouch with you about Questions on the Project?',
        name: 'questions'
    },
])
.then((data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) => err ? console.error(err) : console.log('Your README has been created!')
    );
})

// TODO: Create a function to write README file
function writeToFile(title, description, installation, usage, license, contributing, tests, questions) {
    const content = markDown.generateMarkdown(data)
    fs.writeFile('README.md', content, err => {
        if (err) {
          console.error(err);
          return;
    }
    console.log('README.md file generated!');
  });
}

// TODO: Create a function to initialize app
function init() {
    // writeToFile()
};

// Function call to initialize app
init();
