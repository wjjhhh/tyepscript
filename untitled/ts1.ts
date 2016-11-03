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


function  Hello<T>(arg:T):T{
    return arg;
}
var myHello:<K>(arg:K)=>K=Hello;
alert(myHello(1))


