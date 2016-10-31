/**
 * Created by Employee on 2016/10/28.
 */
interface IUserinfo{
    age:any;
    name:string;
}
function getInfo(user:IUserinfo):string{
    return user.age+"====="+user.name;
}
var obj={name:12,age:100};
(function(){
    var test1=getInfo(obj);
    console.log(test1);
})()