console.log("%cCONDITIONAL  STATEMENT IN  JAVA SCRIPT\n","color : red;");

console.log("1>if\n2>if else\n3>if else if ladder\n\n");

let a = 9;


console.log("1>if");


if (a == 9) {
  console.log("9 IS EQUAL TO " , a);       //TRUE BLOCK
}

console.log("%cif HAS ONLY TRUE BLOCK IF CONDITION IS TRUE THAN IT WILL EXECUTE TRUE BLOCK.\n\n","color : lime;");



console.log("----------------------------------------------------------------------\n\n");



console.log("2>if else");



if (a % 2 == 0) {
  console.log(a,"IS EVEN NUMBER");     //TRUE BLOCK
}
else{
  console.log(a,"IS ODD NUMBER");      //FALSE BLOCK
}

console.log("%cif else HAS TRUE BLOCK AND FALSE BLOCK BOTH IF CONDITON IS TRUE THAN TRUE BLOCK WILL BE EXECUTED BUT IF CONDITOIN IS FALSE THAN FALSE BLOCK WILL BE EXECUTED.\n\n","color : lime;");


console.log("----------------------------------------------------------------------\n\n");


console.log("3>if else if ladder");


if (a == 9){
  console.log("9 IS EQUALL TO",a);
}
else if (a > 9){
  console.log(a + " IS GREATER THAN 9");
}
else {
  console.log(a + " IS LESS THAN 9");
}



console.log("%c\nif else if ladder HAS N NUMBER OF BLOCK SO IT DEPENDS ON THE CONDITION WHICH BLOCK WILL BE TRUE IF CONDITION IS TRUE THAN THAT BLOCK WILL BE EXECUTED.","color : lime;");






