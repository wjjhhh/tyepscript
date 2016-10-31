var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animai = (function () {
    function Animai(name) {
        this.name = name;
    }
    Animai.prototype.eat = function () {
        alert(this.name + '吃');
    };
    Animai.prototype.breath = function () {
        alert(this.name + '呼吸');
    };
    return Animai;
}());
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish(name) {
        _super.call(this, name);
    }
    Fish.prototype.breath = function () {
        alert(this.name + '呼吸重写');
    };
    return Fish;
}(Animai));
var fish = new Fish('哇哈哈');
//# sourceMappingURL=ts1.js.map