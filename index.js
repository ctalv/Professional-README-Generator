// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Breifly describe your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project. Include a URL if deployed.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions for your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['Apache', 'MIT','GBL','BDS'],
        message: 'Select a license for your project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./output/${fileName}`, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
    )
}

// TODO: Create a function to initialize app
function init() {

    const generateREADME = ({ title, description, install, usage, contribution, test, license, email, username }) =>
        `# ${title}

![License](https://img.shields.io/badge/license-${license}-brightgreen)

## Description
${description}
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

    
## Installation
${install}
    
## Usage
${usage}
 
## Contributing
${contribution}

## Tests
${test}
    
## Questions
If you have any questions, email me at ${email} or message me on my GitHub at https://github.com/${username}.

## License
This project is covered under the ${license} License.

`;

    inquirer
        .prompt([...questions])
        .then((answers) => {
            writeToFile('README.md', generateREADME(answers));
        })

}


// Function call to initialize app
init();


