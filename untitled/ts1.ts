interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
    var newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }

}