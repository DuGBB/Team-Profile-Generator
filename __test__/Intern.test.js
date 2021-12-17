const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Lois', 'superGirl2010', 'LKathyrn@fubar.com', 'BamaRollTide');

    expect(intern.name).toBe('Lois');
    expect(intern.id).toBe('superGirl2010');
    expect(intern.email).toBe('LKathyrn@fubar.com');
    expect(intern.school).toBe('BamaRollTide');

    expect(intern.getSchool()).toBe('BamaRollTide');
    expect(intern.getRole()).toBe('Intern');
})