var indexOf = function (source, char) {
    var index = 0;
    for (var i = 0; i < source.length; i++) {
        if (source[i] === char) {
            index = i;
            return index;
        }
    }
    return -1;
};
console.log(indexOf("hawwwwy", "y"));
