module.exports.test = 'A';

const modB = require('./06_moduleB');

console.log('modA',modB.test);

module.exports.test = 'AA';