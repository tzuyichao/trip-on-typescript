type Foot = number;
type Pound = number;

type Patient = {
    name: string;
    height: Foot;
    weight: Pound;
}

let patient: Patient = {
    name: 'John Doe',
    height: 5,
    weight: 100
}

console.log(patient);