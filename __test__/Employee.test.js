const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Grant', 'superBoy2017', 'GrantJames@fubar.com');

    expect(employee.name).toBe('Grant');
    expect(employee.id).toBe('superBoy2017');
    expect(employee.email).toBe('GrantJames@fubar.com');

    expect(employee.getName()).toBe('Grant');
    expect(employee.getId()).toBe('superBoy2017');
    expect(employee.getEmail()).toBe('GrantJames@fubar.com');
    expect(employee.getRole()).toBe('employee');
})