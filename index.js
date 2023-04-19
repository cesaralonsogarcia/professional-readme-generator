// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps would you like to add to the Installation section?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What instructions and examples would you like to add to the Usage section?',
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Cluase "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License 2.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        message: 'What License would you like to use?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What would you like to add to the Credits section?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What would you like to add to the Tests section?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What would you like to add to the Questions section?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
        console.log(answers);
      });
}

// Function call to initialize app
init();