"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, _email) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this._email = _email;
        _this.read = true;
        _this.write = true;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (v) {
            this._email = v;
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
exports.Admin = Admin;
var user = new User("Nicko");
var admin = new Admin("Admin", "admin@gmail.com");
var adminRole = Admin.getRoleName;
