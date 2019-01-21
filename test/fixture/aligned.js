'use strict';

const {
    isObjectPattern,
    isArrayPattern,
} = require('putout').types;

module.exports.report = () => 'Empty block statement';

module.exports.fix = (path) => {
    path.remove();
};

module.exports.find = (ast, {traverse}) => {
    const places = [];
    
    traverse(ast, {
        VariableDeclarator(path) {
            const {id} = path.node;
            
            if (!isObjectPattern(id, {properties: []}))
                return places.push();
            
            if (!isArrayPattern(id, {elements: []}))
                return places.push();
        }
    });
    
    return places;
};

