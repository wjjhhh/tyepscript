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
// class Student extends Person{
//     school:string;
//     constructor(name:string,age:number,school:string){
//         super(name,age)
//         this.school=school;
//     }
//     tell(){
//         return this.name+":"+this.age+":"+this.school;
//     }
// }
// var st=new Student("jj",12,"wefe");
// console.log(st.tell())
var st2 = new Person();
st2.name = '123';
console.log(st2.tell());
//# sourceMappingURL=ts1.js.map