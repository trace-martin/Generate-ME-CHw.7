// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function init() {
    console.log('Hello! Welcome to my README generator, please follow the prompts below!')
    const questions = [
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
            message: 'Please provide a description for your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How do you install this project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is the purpose of this project?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What license do you want to use for this project?',
            name: 'license',
            choices: ['None', 'Apache 2.0', 'GNU v3', 'MIT']
        },
        {
            type: 'input',
            message: 'Who can contribute to this project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'What are the test for your application?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Please enter your email address you would like to be contacted at.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Are there any resources you would like to add?',
            name: 'resources'
        }
    ];

    inquirer.prompt(questions)
    .then((data) => {
            const content = generateMarkdown(data);
            fs.writeFile('README.md', content, (err) => err ? console.error(err) : console.log('Your README has been created!')
        )
    });
};

// TODO: Create a function to initialize app
// function init() {
// };

// Function call to initialize app
init();