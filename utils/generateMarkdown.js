// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributers](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## License

  This project is licensed under the ${answers.license} license.

  // need to add badges and selection for license

  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}
  
  ## Questions

  ${answers.questions}`;
}

module.exports = generateMarkdown;
