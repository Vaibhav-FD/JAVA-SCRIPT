console.log("%cVARIABLES"," font-size : 45px; color:green; background-color:black;");
console.log("TO DECLARE VARIABLE WE CAN USE let , var AND const KEYWORD")
console.log("JAVA SCRIPT IS CASE SENSITIVE LANGUAGE")



console.log("\nvar\n\n");


var a = 9;          //VARIABLE DECLARATION
console.log(a);

var a = 12;          //VARIABLE RE - DECLARATION
console.log(a);
 
var b;
b = 21;             //VARIABLE ASSIGN 
console.log(b);

b = 27;
console.log(b);       //VARIABLE RE - ASSIG


console.log("++++++++++++++++++++++++++++++++++");
console.log("var HAS GLOBAL SCOPE SO WE CAN RE-DECLARE AND RE-ASSIGNE VARIABLES");
console.log("++++++++++++++++++++++++++++++++++\n\n");
// console.log("USE let AND const");

//------------------------------------------------------------------------------




console.log("\nlet","\n\n");


let c = 36;
console.log(c);  

// let c = 29;  FOR let RE - RECLARTION IS NOT ALLOWED

c = 39;
console.log(c);

// BUT RE - ASSIGN IS ALLOWED



{                                         //BLOCK
  let c = 45;
  console.log(c);

  c = 48;
  console.log(c);

  // let c = 52;   SAME BLOCK  NOT ALLOWED  THIS WILL GIVE AN ERROR

}


console.log("++++++++++++++++++++++++++++++++++");
console.log("FOR let RE - RECLARTION IS NOT ALLOWED BUT WE CAN RE - ASSIGN");  
console.log("LET IS BLOCK SCOPE SO WE CAN RE - DECLARE AND RE - ASSIGN VARIABLE IN DIFFERNET BLOCK BUT NOT IN SAME BLOCK");
console.log("++++++++++++++++++++++++++++++++++\n\n");





//----------------------------------------------------------------------------



console.log("\nconst\n\n");


const d = 54;
console.log(d); 

// const d = 69;   RE - RECLARTION IS NOT ALLOWED WITH const THIS WILL GIVE AN ERROR

/* SEPERATE DECLARTION AND SEPERATE ASSIGNMENT IS NOT ALLOWED FOR const WE MUST HAVE TO ASSIGN OR INITIALIZE ANY VALUE TO THE VARIABLE AT THE TIME OF DECLARTIING IT.

const i;
i = 90;
THIS IS NOT ALLOWED                 THIS WILL GIVE AN ERROR
*/
 

{
  const d = 63;                              // DIFFERENT SCOPE  ALLOWED
  console.log(d); 
}


console.log("++++++++++++++++++++++++++++++++++");
console.log("FOR const RE - RECLARTION AND RE - ASSIGN BOTH ARE NOT ALLOWED AND ONE MORE IMPORTANT THING IS WE MUST HAVE TO ASSIGN ANY VALUE TO THE VARIABLE AT THE TIME OF DECLARTION IF WE USE const.");
console.log("const IS ALSO BLOCK SCOPE SO WE CAN RE - DECLARE VARIABLE IN DIFFERNET BLOCK BUT NOT IN SAME BLOCK");
console.log("++++++++++++++++++++++++++++++++++");






console.log("\n\n\nNOTE   -   DO NOT USE var BECUASE IT HAS GLOBAL SCOPE AND IT CAN BE RE DECLARE AS WELL AS RE ASIGN MAY BE IT CAN GENERATE SOME ERRORS AND BUGS SO ALWAYS USE let OR const.");


console.log("%c\n\n\nNOTE   -   THERE ARE SOME RULE TO DECLARE VARIBALE IN JAVA SCRIPT   \n\n\n<1> VARIBLE NAME MUST STARTS WITH EITHER LETTERS(a-z,A-Z), _ OR $.  \n<2> VARIABLE NAME CAN CONTAIN LETTERS (a-z,A-Z) , _ ,$ AND NUMBERS(0-9).\n<3> VARIABLE NAME SHOULD NOT HAVE WHITE SPACE. \n<4> JS IS CASE SENSITVE LANGUAGE SO variable a AND varibale A ARE DIFFERNET.  \n<5> YOU CAN NOT GIVE VARIBLE NAME WHICH IS ALREADY A KEY WORD OR RESERVED WORD IN JS. FOR EX - let var = 9; BUT let VAR = 12; IS OK","color: lime ;");


// var x = 9;       let x = 12;
// let x = 12;      var x = 9;
// console.log(x);

// THIS BOTH ARE NOT ALLOWED IT WILL GIVE AN ERROR SAME FOR const

// var y = 27;       let y = 21;
// let y = 21;      var y = 27;
// console.log(y);
// IT WILL GIVE AN ERROR


