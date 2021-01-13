"use strict";
var Lenovo = /** @class */ (function () {
    function Lenovo() {
    }
    Lenovo.prototype.on = function () {
        console.log("Laptop turn on");
    };
    Lenovo.prototype.off = function () {
        console.log("Laptop turn off");
    };
    return Lenovo;
}());
var lenovoLaptop = new Lenovo();
lenovoLaptop.on();
lenovoLaptop.off();
