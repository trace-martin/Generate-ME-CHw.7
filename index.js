// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
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
];

// TODO: Create a function to write README file
function writeToFile(title, description, installation, usage, license, contributing, tests, questions) {
    const content = markDown
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
    return inquirer.prompt(questions)
    // .then((data) => {
    //     const gen = markDown.generateMarkdown(data)
    //     fs.writeFile('/gen/README.md', gen);
    // })
    .catch((err) => {
        console.error("Uh Oh", err)
    })
};

// Function call to initialize app
init();
