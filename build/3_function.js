"use strict";
function getName() {
    return "Hello, this function is returning a string";
}
function getAge() {
    return 20;
}
function doWalk(times) {
    if (times === void 0) { times = 0; }
    for (var index = 0; index < times; index++) {
        console.log("Walking");
    }
}
var add = function (val1, val2) {
    return val1 + val2;
};
//optional params
var parseToInt = function (num) { return parseInt(num) || 0; };
var addWithOptional = function (val1, val2) {
    return parseToInt(val1) + parseToInt(val2);
};
console.log(addWithOptional(1));
