const jsonString = `{
    "name": "Maxwell",
    "age": 18
}`;

let maxwell = JSON.parse(jsonString) as {name: string, age: number};

console.log(maxwell);