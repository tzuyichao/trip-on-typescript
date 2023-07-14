let whatIsThis;
let randomNumber = Math.random();

switch(true) {
    case randomNumber < 0.33: whatIsThis = 123;
    case randomNumber < 0.66: whatIsThis = 'string';
    default: whatIsThis = true;
}