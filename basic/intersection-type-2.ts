type TypeA = {
    id: string;
    name: string;
};

type TypeN = {
    id: number;
    name: string | undefined;
};

// id: never
type MixAN = TypeA & TypeN;

type StringAndNumber = string & number;

// const obj: MixAN = {
//     id: 10
// };