const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Lauren', 'BossLady', 'LeadLady@fubar.com', '555-606-2420');

    expect(manager.name).toBe('Lauren');
    expect(manager.id).toBe('BossLady');
    expect(manager.email).toBe('LeadLady@fubar.com');
    expect(manager.officeNumber).toBe('555-606-2420')

    expect(manager.getOfficeNumber()).toBe('555-606-2420');
    expect(manager.getRole()).toBe('Manager');
})