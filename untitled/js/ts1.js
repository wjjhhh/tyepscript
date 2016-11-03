var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        // constructor(name:string,age:number){
        //     this.name=name;
        //     this.age=age;
        // }
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.tell = function () {
        return this._name + ";" + this.age;
    };
    return Person;
}());
function Hello(arg) {
    return arg;
}
var myHello = Hello;
alert(myHello(1));
//# sourceMappingURL=ts1.js.map