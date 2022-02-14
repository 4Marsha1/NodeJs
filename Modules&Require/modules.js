// ---------> display as an object
// const xyz = require('./people');
// console.log(xyz);

// ---------> display seperately
// const xyz = require('./people');
// console.log(xyz.people, xyz.age);

// ---------> Import using destructuring & display seperately
const { people, age } = require('./people');
console.log(people, age); 
