
//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看  c
console.log(3===3);
console.log(3==="3"); //false
console.log(3=="3");
console.log(3==new String(3));
console.log(3===new String(3));  //false

//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看  全部为false
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1); //false
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
console.log(obj1 == new String("xyz")); //false


//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看 b
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);  //false
console.log(obj1 !== obj2); //true
console.log(obj1 != obj2); //true
console.log(obj1 != new String("xyz")); //true

//注意 是引用类型转换到基本类型了？还是基本类型转换到引用类型了？
console.log(2 == 2);
console.log(new Number(2) == new Number(2));
console.log(2 == new Number(2));

//存在二义性的代码，与预期的结果不一致
var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(false)};
//var obj2 = {x:2,y:[1],z:Boolean(new Boolean(false))};
console.log(obj1.z == obj2.z);





