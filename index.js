const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("/Users/markbaldry/Desktop/readme-generator/node_modules/inquirer/lib/objects/choices");
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is you GitHub username?🐙'
    },
    {
        type: 'input',
        name: 'githublink',
        message: 'What is the GitHub link to your project?'
    },
    {
        type: 'input',
        name: 'videolink',
        message: 'What is the link to your project video description?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is you email address?📧'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your Project's name? 📂"
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe you project?🖋'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license?🔐',
        choices: ["MIT", "APACHE2.O", "GPL", "NONE"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to installed dependencies?💾',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run  to run test?💽',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?🗒',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?🗒',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...response}))
    })
    
}

// function call to initialize program
init();
