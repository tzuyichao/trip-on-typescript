type TripleNumber = [number, number, number];

let ex1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let ex2 = [
    [1, 2, 3] as TripleNumber,
    [4, 5, 6] as TripleNumber,
    [7, 8, 9] as TripleNumber
];

let ex3 = [
    [1, 2, 3] as TripleNumber,
    [4, 5, 6] as TripleNumber,
    [7, 8, 9]
];

type QuadrupleNumber = [number, number, number, number];

let ex4 = [
    [1, 2, 3] as TripleNumber,
    [4, 5, 6] as TripleNumber,
    [7, 8, 9, 10] as QuadrupleNumber
];

let ex5 = [
    [1, 2, 3],
    [4, 5, 6] as TripleNumber,
    [7, 8, 9, 10] as QuadrupleNumber
];

