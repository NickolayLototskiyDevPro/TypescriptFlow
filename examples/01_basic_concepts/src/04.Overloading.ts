type FullName = string[];

function overloadedFunction(): void;
function overloadedFunction(name: string): string;
function overloadedFunction(name: FullName): string;
function overloadedFunction(name?: string | FullName): string | void {
    if (name === undefined) {
        return;
    }

    if (typeof name === 'string') {
        // At this point typescript recognizes name as a string
        let reversedName: string = name
            .toLocaleLowerCase()
            .split('')
            .reverse()
            .join('');

        return reversedName
            .charAt(0)
            .toUpperCase()
            .concat(reversedName.slice(1));
    }

    if (Array.isArray(name)) {
        // At this point typescript recognizes name as an array 
        return name.join(' ');
    }
}

type PersonData = { firstName: string, secondName: string };

function veryOverloadedFunction(name: string): string;
function veryOverloadedFunction(name: string, second: string): string;
function veryOverloadedFunction(people: string[]): string[];
// It is ok to use any here
function veryOverloadedFunction(...params: any[]): string | string[] | null {
    if (params.length === 1 && typeof params[0] === 'string') {
        return '';
    }

    if (params.length === 2 && typeof params[0] === 'string' && typeof params[1] === 'string') {
        return '';
    }

    if (params.length === 1 && Array.isArray(params[0])) {
        return [];
    }

    return null;
}