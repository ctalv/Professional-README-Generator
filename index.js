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
        choices: ['Apache License 2.0', 'MIT'],
        message: 'Select a license for your project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = JSON.stringify(data)
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
    )
}

// TODO: Create a function to initialize app
function init() {
    const generateREADME =
    `# Project Title

    ## Description
    
    
    ## Table of Contents 
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

    
    ## Installation
    
    
    ## Usage
    
 
    ## Contributing
    

    ## Tests

    
    ## Questions


    ## License
    
    `;

    inquirer
    .createPromptModule([...questions])
    .then()

    writeToFile('README.md', generateREADME);
}

// Function call to initialize app
init();
