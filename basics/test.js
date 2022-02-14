// basic JS 
const greet = (name) => {
    console.log(`Hello ${name}`);
}
greet("JoHn");

// Global Object ------> same as Window -----> Universal object
// console.log(global);
// global.setTimeout --------> global. can be ignored
setTimeout(() => {
    console.log('hello');
    clearInterval(int);
}, 3000);
const int = setInterval(() => {
    console.log('interval');
}, 1000)

// Path Selection
console.log(__dirname);
console.log(__filename);

// window object is not available ---> so no DOM Selection
// console.log(document);  ---> throws error