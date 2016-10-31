interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
    var newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=config.width*config.width;
    }
    return newSquare;

}
var mySquare=createSquare({color:'red',width:200});

interface SearchFunc {
    (source: string, subString: string): boolean;
}
var mySearch:SearchFunc;
mySearch=function(source:string,subString:string){
    var result=source.search(subString);
    if(result==-1){
        return false;
    }
    else{
        return true;
    }
}


