// debugger
let counter=2;
const upvote=()=> {
    // counter++;
    // debugger
    return counter++;
    // not the same as below
    // return ++counter;
    // return counter = counter + 1;
    // ++x (pre-increment) means "increment the variable; the value of the expression is the final value" x++ (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"
    // https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript#:~:text=%2B%2Bx%20(pre%2Dincrement),expression%20is%20the%20original%20value%22
}
console.log(upvote(), "hello");
console.log(counter, "hi")

