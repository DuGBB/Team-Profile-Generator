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
};

const newMemberQuestions = memberData => {
    if (!memberData.members) {
        memberData.members = [];
    }
    return inquirer.prompt([

        {
            type: 'list',
            name: 'menu',
            message: 'Choose to add either an Engineer or an Itern.',
            choices: ['Engineer', 'Intern']
        
        },
        {
            type: 'input',
            name: 'name',
            message: 'Provide the team members name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the team members name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Provide the team members ID. (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please provide the team members ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide the team members email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide the team members email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide the engineers GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide the engineers GitHub username!');
                    return false;
                }
            },
            when: ({ menu }) => {
                if (menu === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'school',
            message: 'Provide the interns school. (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please provide the interns school!');
                    return false;
                }
            },
            when: ({ menu }) => {
                if (menu === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team mate',
            default: false
        }
   
    ]
    ).then(memberNewData => {
        memberData.members.push(memberNewData);
        if (memberData.confirmAdd) {
            return newMemberQuestions(memberData);
        } else {
            return memberData;
        }
    });
};


function init() {
    managerQuestions()
    .then(newMemberQuestions)
    .then(data => {
        console.log(data);
    });
    
}
 init();