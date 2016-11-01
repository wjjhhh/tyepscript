class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    tell(){
        return this.name+";"+this.age;
    }
}
class Student extends Person{
    school:string;
    constructor(name:string,age:number,school:string){
        super(name,age)
        this.school=school;
    }
    tell(){
        return this.name+":"+this.age+":"+this.school;
    }
}
var st=new Student("jj",12,"wefe");
console.log(st.tell())