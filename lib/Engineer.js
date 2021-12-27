const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);
        
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    getIcon() {
        return '<i class="material-icons" style="font-size:48px;color:red">person</i>';
    }
    createEmployeeDiv() {
        let divStart = super.createEmployeeDiv();
        return `
        ${divStart}
        <p>GitHub: <a href="https://www.github.com/${this.getGitHub()}">${this.getGitHub()}</a></p>
        </div>`;
    }
}

module.exports = Engineer;