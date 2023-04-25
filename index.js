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

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## License

    This project is licensed under the ${license} license.

    ## Contributing

    ${contributing}

    ## Tests

    ${tests}`;

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
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile(answers);
    })
}

// Function call to initialize app
init();
