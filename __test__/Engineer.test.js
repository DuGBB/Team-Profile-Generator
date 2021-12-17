const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Don', 'doomsDay2015', 'DonaldBarry@fubar.com', 'DonBaRRy');

    expect(engineer.name).toBe('Don');
    expect(engineer.id).toBe('doomsDay2015');
    expect(engineer.email).toBe('DonaldBarry@fubar.com');
    expect(engineer.github).toBe('DonBaRRy');

    expect(engineer.getName()).toBe('Don');
    expect(engineer.getId()).toBe('doomsDay2015');
    expect(engineer.getEmail()).toBe('DonaldBarry@fubar.com');
    expect(engineer.getGitHub()).toBe('DonBaRRy');
    expect(engineer.getRole()).toBe('Engineer');

})