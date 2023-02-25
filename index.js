const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is you GitHub username?🐙'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is you email address?📧'
    },
    {
        type: 'input',
        name: 'Title',
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
        Choices: ["MIT", "APACHE 2.O", "GPL", "NONE"]
    },
    {
        type: 'input',
        name: 'INSTALLATION',
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
    },
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
