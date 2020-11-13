type PersonalInfo = {
    name: string;
    age: number;
    interest: string[];
};

type ExtendedPersonalInfo = {
    [key in keyof PersonalInfo]: PersonalInfo[key];
} & {
    email: string;
};

const obj: ExtendedPersonalInfo = {
    name: 'John Doe',
    age: 18,
    interest: [],
    email: 'john.doe@mail.com'
};

console.log(obj);

type Interest = PersonalInfo['interest'];

const obj1 = ['Java', 'Powershell', 'TypeScript', 'Python', 'Go'];