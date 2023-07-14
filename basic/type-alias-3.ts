type Foot = number;
type Pound = number;

// optional properties
type Patient = {
    name: string;
    height: Foot;
    weight?: Pound;
}

let patient: Patient = {
    name: 'test',
    height: 1.18
};

console.log(patient);

delete patient.name;

console.log(patient);
