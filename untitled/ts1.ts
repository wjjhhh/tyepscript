class Animai{
    name:string;
    eat():void{
        alert(this.name+'吃');
    }
    breath():void{
        alert(this.name+'呼吸')
    }
    constructor(name:string){
        this.name=name;
    }
}
class Fish extends Animai{
    name:string;
    constructor(name:string){
        super(name);
    }
    breath():void{
        alert(this.name+'呼吸重写');
    }
}
var fish=new Fish('哇哈哈');


