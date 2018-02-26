function useGenerics<T>(value: T): void {
    console.log(value);
}

// CT is a type with looks like Array
function useArray<DT, CT extends Array<DT>>(value: CT): void {
    return value.forEach((item): void => {
        console.log(item);
    });
}

useArray<string, string[]>(['1', '2', '3']);