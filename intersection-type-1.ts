type PersonalInfo = {
    name: string;
    age: number;
    interest: string[];
};

type AccountInfo = {
    email: string;
    username: string;
    subscribed: boolean;
};

type UserAccount = PersonalInfo & AccountInfo;
