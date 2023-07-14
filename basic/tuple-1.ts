const foo: [number, string, boolean] = [123, 'number', false];

const bar: (number | string | boolean)[] = [true, false, "abc", 123, 1.22];

// array allow element type in number or boolean
const bla: (number | boolean)[] = [123, true];
