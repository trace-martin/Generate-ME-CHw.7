// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license === 'MIT') {
     return '![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)'
  } 
  if(license=== 'Apache 2.0'){
    return '![License: MIT](https://img.shields.io/badge/License-Apache_2.0-green.svg)';
  }
  if(license=== 'GNU v3'){
    return '![License: MIT](https://img.shields.io/badge/License-GNU_v3-green.svg)';
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `<a href="https://opensource.org/license/mit/">${license}</a>`;
  }
  if(license=== 'Apache 2.0'){
    return `<a href="https://www.apache.org/licenses/LICENSE-2.0">${license}</a>`;
  }
  if(license=== 'GNU v3'){
    return `<a href="https://www.gnu.org/licenses/gpl-3.0.en.html">${license}</a>`;
  }
  if(license=== 'None'){
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the ${renderLicenseLink(license)} License.`;
  }
  if(license=== 'Apache 2.0'){
    return `This project is licensed under the ${renderLicenseLink(license)} License.`;
  }
  if(license=== 'GNU v3'){
    return `This project is licensed under the ${renderLicenseLink(license)} License.`;
  }
  if(license=== 'None'){
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  # ScreenCastify video link:

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Resources](#resources)
  <hr>
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}
  <br>
  ${renderLicenseSection(data.license)}


  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  <hr>

  ## Questions

  If you have any questions or would like to reach me please use one of the methods below:

  Email: ${data.email}

  GitHub: github.com/${data.github}

  <hr>

  ## Resources
  
  ${data.resources}`;
}

module.exports = generateMarkdown;