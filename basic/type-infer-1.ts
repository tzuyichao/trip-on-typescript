let whatIsThis;
let randomNumber = Math.random();

if(randomNumber < 0.33) {
    whatIsThis = 123;
} else if(randomNumber < 0.66) {
    whatIsThis = 'string';
} else {
    whatIsThis = true;
}