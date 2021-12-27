const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email);
            this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getIcon() {
        return '<i class="material-icons" style="font-size:48px;color:red">event_seat</i>';
    }

    getRole() {
        return 'Manager';
    }
    createEmployeeDiv() {
        let divStart = super.createEmployeeDiv();
        return `
        ${divStart}
        <p>Office Number: ${this.getOfficeNumber()}</p>
        </div>`;
    }
}

module.exports = Manager;