type PersonalInfo = {
    name: string;
    age: number;
    interest: string[];
};

type KeyofPersonalInfo = keyof PersonalInfo;

let obj: KeyofPersonalInfo;

// error
//obj = 'test';
