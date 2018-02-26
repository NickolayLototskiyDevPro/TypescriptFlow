const arrayOfStrings: string[] = ['1', '2', '3'];
const arrayOfNumbers: Array<number> = [1, 2, 3];

// We are able to define own types with type keyword
type PersonTuple = [string, number];
type PersonTupleArray = PersonTuple[];

const tuple: PersonTuple = ['Sergey', 27, 'John', 'Doe', 34];

const tuplesList: PersonTupleArray = [
    ['John', 30],
    tuple
];