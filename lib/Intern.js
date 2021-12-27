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

    getIcon() {
        return '<i class="material-icons" style="font-size:48px;color:red">school</i>';
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