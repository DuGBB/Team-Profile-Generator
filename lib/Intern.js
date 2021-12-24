const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);
            this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    createEmployeeDiv() {
        let divStart = super.createEmployeeDiv();
        return `
        ${divStart}
        <p>School: ${this.getSchool()}</p>
        </div>`;
    }
}

module.exports = Intern;