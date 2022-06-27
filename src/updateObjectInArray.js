"use strict";
function updateObjectInArray(initialArray, key, value, patch) {
    let newArray = initialArray.slice();
    newArray = newArray.map((obj) => {
        if (obj[key] === value) {
            return Object.assign(Object.assign({}, obj), patch);
        }
        else {
            return obj;
        }
    });
    return newArray;
}
