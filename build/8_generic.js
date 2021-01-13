"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _5_class_1 = require("./5_class");
var List = /** @class */ (function () {
    function List() {
        var el = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            el[_i] = arguments[_i];
        }
        this._data = el;
    }
    List.prototype.add = function (el) {
        this._data.push(el);
    };
    List.prototype.addAll = function () {
        var _a;
        var el = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            el[_i] = arguments[_i];
        }
        (_a = this._data).push.apply(_a, el);
    };
    List.prototype.get = function (index) {
        return this._data[index];
    };
    List.prototype.getAll = function () {
        return this._data;
    };
    List.prototype.remove = function (index) {
        if (index < 0 || index > this._data.length - 1)
            throw new Error("Index out of bound");
        this._data.splice(index, 1);
    };
    return List;
}());
var data = new List();
data.add("Nicko1");
data.add(1234);
data.add(true);
data.add({ data: new _5_class_1.User("nicko") });
console.log(data);
///generic in function
function itsMe(value) {
    return value;
}
var itsMeArrow = function (value) {
    return value;
};
console.log(itsMe(new _5_class_1.User("nicko")));
console.log(itsMeArrow(new _5_class_1.User("nicko")));
