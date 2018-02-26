type FunctionArgument = string | number;

// Arguments Type
function myFunction(name: string, age: number, isActive: boolean): void { /* ... */ }
const anotherFunction: (country: string, city: string, zip: number) => void = function() {
    console.log(arguments);
    const argumentsArray: FunctionArgument[] = [...arguments];
}

// Optional Arguments
function optionalArgument(name: string, age?: number) {
    let message: string = `Hello ${name}`;

    if (age !== undefined) {
        message = `${message}, you age is ${age}`;
    }

    console.log(message);
}


// Default argument
function defaultArgument(name: string, isActive: boolean = true) { /* ... */ }


// Infinite arguments
function manyParams(...paramsList: number[]) {
    for (const it of paramsList) {
        console.log(it);
    }
}

function neverFunction(): never {
    throw Error('Houston we have a problem.');
}

function infiniteLoop(): never {
    while(true) {
        /* DO SOME INFINITE JOB */
        /* LONG POOLING FOR EXAMPLE */
    }
}
