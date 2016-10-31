/**
 * Created by Employee on 2016/10/28.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
var a = greeter.greet();
console.log(a);
//# sourceMappingURL=ts1.js.map