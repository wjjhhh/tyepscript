class Person{
    private _name:string;
    age:number;
    // constructor(name:string,age:number){
    //     this.name=name;
    //     this.age=age;
    // }
    get name():string{
        return this._name;
    }
    set name(newName:string){
        this._name=newName;
    }
    tell(){
        return this._name+";"+this.age;
    }
}
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

var st2=new Person();
st2.name='123';
console.log(st2.tell());