const reverseString = (s) => {
    if (typeof s !== 'string') {
        return 'Please input a string';
    }
    return !s.length ? '' : s.split("").reverse().join("");
}

export default reverseString;