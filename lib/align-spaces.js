'use strict';

const isString = (a) => typeof a === 'string';

module.exports = (str) => {
    check(str);
    
    const array = str.split('\n');
    const n = array.length - 1;
    
    for (let i = 0; i < n; i++) {
        const str = array[i];
        
        if (!i || isNotSpaceString(str))
            continue;
        
        array[i] = getSpaces(array[i + 1]);
    }
    
    return array.join('\n');
};

function isNotSpaceString(s) {
    let i = s.length;
    
    if (!i)
        return false;
    
    while (--i > -1) {
        if (s[i] !== ' ')
            return true;
    }
    
    return false;
}

function getSpaces(s) {
    let spaces = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ')
            return spaces;
        
        spaces += ' ';
    }
    
    return spaces;
}

function check(str) {
    if (!isString(str))
        throw Error('str should be a string!');
}
