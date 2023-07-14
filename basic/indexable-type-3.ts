type ReadonlyStringArray = {
    readonly [key: number]: string;
    length: number;
};

const readonlyObj: ReadonlyStringArray = ['Hello', 'World', 'TypeScript'];
readonlyObj[0] = 'Bye Bye';