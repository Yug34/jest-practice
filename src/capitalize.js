const capitalize = (s) => {
    if (typeof s !== 'string') {
        return 'Please input a string';
    }
    return !s.length ? '' : s.charAt(0).toUpperCase() + s.slice(1);
}

module.exports = capitalize;