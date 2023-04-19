// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
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
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License 3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v3.0',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ],
        message: 'What License would you like to use?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What would you like to add to the Contributing section?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What would you like to add to the Tests section?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const title = `${answers.title}`;
            const fileName = title.replace(' ', '-');
            writeToFile(`${fileName}_README.md`, answers)
        });
}

// Function call to initialize app
init();