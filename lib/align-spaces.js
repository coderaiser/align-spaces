'use strict';

module.exports = (str) => {
    check(str);
    
    const array = str.split('\n');
    
    for (let i = 0; i < array.length; i++) {
        const str = array[i];
        
        if (str || !i)
            continue;
        
        array[i] = getSpaces(array[i - 1]);
    }
    
    return array.join('\n');
};

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
    if (typeof str !== 'string')
        throw Error('str should be a string!');
}

