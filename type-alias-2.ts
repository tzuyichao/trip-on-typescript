type Foot = number;
type Pound = number;

type Patient = {
    name: string;
    height: Foot;
    weight: Pound;
}

// weight is missing
// let patient: Patient = {
//     name: 'test',
//     height: 1.18
// };

let patient: Patient = {
    name: 'John Doe',
    height: 1.12,
    weight: 90.1
}