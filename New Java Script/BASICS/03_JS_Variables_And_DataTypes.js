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