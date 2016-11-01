var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tell = function () {
        return this.name + ";" + this.age;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        _super.call(this, name, age);
        this.school = school;
    }
    Student.prototype.tell = function () {
        return this.name + ":" + this.age + ":" + this.school;
    };
    return Student;
}(Person));
var st = new Student("jj", 12, "wefe");
console.log(st.tell());
//# sourceMappingURL=ts1.js.map