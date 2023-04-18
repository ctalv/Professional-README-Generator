// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
    )
}

// TODO: Create a function to initialize app
function init() {
    const generateREADME = (...questions) =>
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
    
    `

    writeToFile(generateREADME, 'cool')
}

// Function call to initialize app
init();
