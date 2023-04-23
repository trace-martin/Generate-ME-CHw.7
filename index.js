// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'message here',
        name: 'name of key to call'
    },
    {
        type: 'input',
        message: 'message here',
        name: 'name of key to call'
    },
    {
        type: 'input',
        message: 'message here',
        name: 'name of key to call'
    },
    {
        type: 'input',
        message: 'message here',
        name: 'name of key to call'
    },
        {
        type: 'input',
        message: 'message here',
        name: 'name of key to call'
    },
];

// TODO: Create a function to write README file
function writeToFile(title, description, installation, usage, licecnse, contributers, test, questions) {
    const readMeContent = `
    # ${title}
    
    ${description}

    ## Table of Contents

    - [Installation](#)
    
    `

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
    .then(answers) => {
        const 
    }
}

// Function call to initialize app
init();
