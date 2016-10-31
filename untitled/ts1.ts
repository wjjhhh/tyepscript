/**
 * Created by Employee on 2016/10/28.
 */
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return "hello "+this.greeting;
    }
}
var greeter=new Greeter('world');