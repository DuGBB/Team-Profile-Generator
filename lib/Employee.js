class Employee {
    constructor(name = '', id = '', email = '') {
        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'employee';
    }

    createEmployeeDiv() {
        return `
        <div class="seperateCards">
        <div class="cardHeader">
        <h3>${this.getName()}</h3>
        <h4>${this.getIcon()}  ${this.getRole()}</h4>
        </div>
        <p>ID: ${this.getId()}</p>
        <p>Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></p>`
    }
}
module.exports = Employee;