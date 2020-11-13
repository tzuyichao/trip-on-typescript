type StringArray = {
    [key: number]: string;
    length: number;
};

const obj: StringArray = ['Hello', 'World', 'TypeScript'];
console.log(obj.length);
console.log(obj);