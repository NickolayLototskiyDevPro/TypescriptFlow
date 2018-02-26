function callbackWithoutParams(cb: () => void): void {
    cb();
}

function callbackWithParams(cb: (data: string[]) => void): void {
    cb(['John', 'Doe']);
}

function callbackThatReturnsValue(cb: (data: string[]) => string): void {
    let str: string = cb(['John', 'Doe']);
    console.log(str);
}

callbackWithoutParams((): void => {
    console.log('I have been called!');
});

callbackWithParams((data): void => {
    console.log('I have been called with params', data);
});

callbackThatReturnsValue((data): string => {
    return data.join('');
});