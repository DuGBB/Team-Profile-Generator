const inquirer = require('inquirer');

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Provide your name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your name!');
                    return false;
                }
            }


        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Provide your ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please provide your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Provide your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Provide your office number. (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please provide your office number!');
                    return false;
                }
            }
        }
    ]);
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Provide your name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Provide your ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please provide your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Provide your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        }
    ]);
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Provide your name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Provide your ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please provide your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Provide your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        },
    ]);
}

function init() {
   let managerAnwser = managerQuestions();
    
}
