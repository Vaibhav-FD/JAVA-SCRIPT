console.log(`%c03_JS_Variables_And_DataTypes`,`color: aqua; font-size:1.5rem; margin-block:1.29rem;`);



console.log(`%cVariables`,`color: lime; text-decoration: underline 2px dashed blueviolet; text-underline-offset: 2px; margin-block: 1.29rem; font-size: 1.29rem;`);


console.log(`%cVariable Is Named Storage For Data And Values.      OR\nVariable Is Container That Can Contain Data And Expressions.      OR\nVariable Is Data Holder Which Holds Different Types Of Data Like Values , Expresions , Funtions , Objects etc.`,`color: #ff9974;`);


console.log(`\n\nWe Can Create Or Declare Variables With %clet And const\n`,`color: crimson;`);


console.log(`The Varible Created By let Has Changable Values Means We Can Change The Value If We Want But The Variable Created By Const Has Fixed Values Means We Can Not Change The Value.`);


console.log(`Re-Assign Is Not Possible In const But Re-Assign Is Possible In let.\n`);

console.log(`Also We Have To Initialize The Value At The Time Of Decalaration In const On The Other Hand We Can Give Value Later On In Case Of let.`);

console.log(`let And const Both Are Block Scoped.`);

console.log(`\n\nSyntax :\n\nlet variableName; \nconst variableName = initialvalue;`);

console.log(`\n\nNow There Are Actually Some Rules To Choose Or Write Variable Names :\n\n%c1] Variable Name Can Contain Letters Upper & Lower Cases (a-z,A-Z) , Numbers (0-9) , $ (Dollar Sign) And _ (Under Score).\n2] The First Letter Should Not Be Number.\n3] We Can Not Write Reserved KeyWord As Variable Name.\n4] The Variable Name Should Not Contain Any White Spcaes.\n\n`,`color: pink;`);

console.log(`%cJava Script Is Case-sensitive So It Will Treat Upper Case And Lower Case Diferently.\n`,`color:crimson;`);


// THIS WILL GIVE AN ERROR

// let 1stNumber;       // FIRST LETTER IS NUMBER
// let full Name;       // NAME HAS WHITE SAPCE
// let let;             // let IS KEYWORD RESERVED WORD


// THIS WILL NOT GIVE AN ERROR

// let $1stNumber;      // FIRST LETTER IS DOLLAR SYMBOL
// let _1stNumber;      // FIRST LETTER IS UNDERSCORE SYMBOL
// let firstNum;        // BEST (MOSTLY USED)
// let full_Name;       // OK
// let LET;             // WORST






// let



let number;   // VARIABLE DECLARATION WITH let
number = 9;   // VARIABLE VALUE ASSIGN WITH let


console.log(number);   // PRINTING VARIABLE 


let secondNumber =  12;  // VARIABLE DECALARATION AND ASSIGNING VALUE AT THE SAME TIME WITH let

console.log(secondNumber);

secondNumber = 21;  // RE-ASSIGNING OR CHANGING VALUE WITH let

console.log(secondNumber);






// const



const thirdNumber = 27;  // DECLARING AND ASSIGN WITH const

/*  const forthNumber; 
    forthNumber = 39;  */     // THIS WILL GIVE AN ERROR






console.log(`%cActually We Can Also Declare Variable Using var Keyword BUT DO NOT USE var TO DECLARE AND CREATE VARIABLES.`,`color:red;`);

console.log(`%cIF WE DO NOT USE ANY KEY WORD WE CAN ALSO CREATE VARIABLES BUT DO NOT DO THIS.`,`color:red;`);






console.log(`%cDataTypes`,`color: lime; text-decoration: underline 2px dashed blueviolet; text-underline-offset: 2px; margin-block: 1.29rem; font-size: 1.29rem;`);


console.log(`%cDataTypes Are Units Which Will Decide What Kind Or Type Of Data Will Be Stored In Variables.`,`color: #ff9974;`);

console.log(`\nThere Are Mainly Two Types Of Data Types Primitive And NoN Primitive.\n\n`);

console.log(`%cPrimitive Data Types Has 7 Data Types : ---NNUBBS--- %c\n\n1] Number\n2] Null\n3] Undefined\n4] Boolean\n5] BigInt\n6] Strings\n7] Symbol`,`color:lightgreen;`,`color:white;`);


console.log(`\n%cNon Primitive Data Types Has Objects :%c\n\n1] Objects\n2] Array\n3] Dates`,`color:lightgreen;`,`color:white;`);

console.log(`%c\n\n\t\t\t--------- Primitive Data Types ---------\n\n`,`color:yellow;`)


let num = 108;
let num2 = -108;
let num3 = 108.99;

console.log(`Positive Number -> ${num}\nNegetive Number -> ${num2}\nFolating Point Number -> ${num3}`);

let string = `Java Script`;
let string2 = `912`;
let string3 = `NumberWithString AND SYMBOL+-*/!@#$%^&*() = 912`;


console.log(`%c---------------------\n`,`color:yellow;`);

console.log(`Charactered String -> ${string}\nNumbered String -> ${string2}\nNumberWithString And Symbols -> ${string3}`);

console.log(`%cString Can Be Any Thing Numbers Symbols And Normal Character Or Mixer Of All`,`color:crimson;`);


console.log(`%c---------------------\n`,`color:yellow;`);

let boolean1 = true;
let boolean2 = false;

console.log(`Boolean Has Only Two Values TRUE And FALSE -> ${boolean1} , ${boolean2}`);



console.log(`%c---------------------\n`,`color:yellow;`);


let bigNumber1 = BigInt(100000008);
let bigNumber2 = BigInt('100000008');
let bigNumber3 = 912n;


console.log(`BigInt -> ${bigNumber1}\nBigInt -> ${bigNumber2}\nBigInt -> ${bigNumber3}`);

console.log(`\n\nNumber DataTypes Has Limit Of %c- 9007199254740991 TO + 9007199254740991%c If We Want Greater Than This Then We Have To Use BigInt`,`color:lightgreen;`,`color:white;`);

console.log(`%cWhile Using BigInt Keep In Mind You Can Only Put Interger Numbers Not Float Number So Pointed Number Will Give An Error.`,`color:crimson;`);

// let bigNumber4 = BigInt(999999.369);  THIS WILL GIVE AN ERROR




