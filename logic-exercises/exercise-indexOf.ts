const indexOf = (source: string, char: string): number => {
    let index = 0;
    
    for (let i = 0; i < source.length; i++) {
        if (source[i] === char) {
            index = i;
            return index;
        }
    }

    return -1;
}

console.log(indexOf("hawwwwy", "y"));
