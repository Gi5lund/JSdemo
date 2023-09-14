function add(n1,n2){
    return n1+n2;
}

const sub=function(n1,n2){
    return n1-n2
}
const cb=function(n1,n2, callback){

    return "Result from the two numbers: "+n1+" and "+n2+"="+callback(n1,n2);
};
//console.log(add(1,2)) // should give 3
//console.log(add) //should give definition
//console.log(add(1,2,3)); // add 1+2 two first arguments
//console.log(add(1)); // missing argument - cant compute number +undefined NaN not a number
//console.log(cb(3,3,add)); // a function is passed as argument result=6
//console.log(cb(4,3,sub)); // function sub is passed result =1
//console.log(cb(3,3,add())) // fails because reference to function was expected but a function call (hence a returnvalue)
//console.log(cb(3,"hh",add)); // typeconveersion to string

//opg 3:
const cb2 = function(n1, n2, callback) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error('Both n1 and n2 must be numbers');
    }
  
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
  
    return "Result from the two numbers: " + n1 + " and " + n2 + "=" + callback(n1, n2);
  };
  //console.log(cb2(3,3,add())) throws new errormessage: Callback must be a function 
 // console.log(cb2(3,"hh",add));

  function addV2(n1, n2, ...rest){
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
 }
 // functionen addV2 tager mindst to argumenter n1, n2 og samler eventuelt yderligere i et array kaldet rest. 
 //hvis funktionen fx var defineret  function addV3(n1,n2,n3...rest) vil den fejle såfremt der kun var medgivet 2 argumenter.
 //ved at kalde reduce på rest angives med arrow-function hvordan arrayet reduceres til en enkelt værdi som derefter adderes til n1+n2
 console.log(addV2(1,2,3,4,5,6))//skal give 21. Stimmt.

 //opgave 4:

 function mul(n1,n2){
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Both n1 and n2 must be numbers');
  }
  return n1*n2;
 };
 console.log(cb(3,4,mul));

 //opgave 5 en måde:
 let x=function(n1,n2){
return n1/n2;
 }
console.log(cb(12,2,x));
//opgave 5 en anden måde
console.log(cb(20,2,(n1,n2)=>n1/n2));
//Callbacks (with map, filter and forEach)
const names=[ 'Lars', 'Jan', 'Peter', 'Bo', 'Frederik', 'Ib', 'Ea', 'Ulla', 'Karen', 'Eva', 'Sif', 'Gunvor'];
const names2=names.filter((name)=> name.length <4);
console.log(names2);
names.forEach((name)=>console.log(name));
names2.forEach((name)=>console.log(name));
const namesUpper=names.map((name)=>name.toUpperCase);

