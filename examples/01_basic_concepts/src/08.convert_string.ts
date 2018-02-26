type ConversionEntity = string | number[];

function convertString(input: ConversionEntity): ConversionEntity {
    if (typeof input === 'string') {
        let result: number[] = input.split('').map((char: string): number => char.charCodeAt(0));
        return result;
    }

    if (Array.isArray(input)) {
        let result: string[] = input.map((charCode: number): string => String.fromCharCode(charCode));
        return result.join('');
    }
}

console.log(convertString([ 83, 101, 114, 103, 101, 121, 32, 90, 111, 116, 101, 110, 107, 111 ]));
console.log(convertString('Sergey Zotenko'));