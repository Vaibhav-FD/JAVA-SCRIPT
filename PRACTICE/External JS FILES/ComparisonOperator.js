console.log("COMPARISION OPERATORS  THERE ARE TOTAL 8 COMAPARISION OPERATORS.");
console.log("> GREATER THAN.");
console.log("< LESS THAN.");
console.log(">= GREATER THAN OR EQUAL TO.");
console.log("<= LESS THAN OR EQUAL TO.");
console.log("==  EQUAL TO SAME VALUE.");
console.log("=== EQUAL TO SAME VALUE AS WELL AS SAME DATA TYPE. ");
console.log("!= NOT EQUAL TO VALUE.");
console.log("!== NOT EQULA TO VALUE AND DATA TYPE.");


console.log("");
console.log("");






console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("");

console.log("%ca>b","color : yellow; ");  
console.log("%ca<b","color : yellow; ");  
console.log("%ca>=b","color : yellow; ");  
console.log("%ca<=b","color : yellow; ");  
console.log("%ca==b","color : yellow; ");  
console.log("%ca===b","color : yellow; ");  
console.log("%ca!=b ","color : yellow; ");  
console.log("%ca!==b","color : yellow; "); 


console.log("");
console.log("");


let a = 9;
let b = 12;


console.log("9>12   ->", a > b);
console.log("9<12   ->", a < b);
console.log("9>=12   ->", a >= b);
console.log("9<=12   ->", a <= b);
console.log("9==12   ->", a == b);
console.log("9===12   ->", a === b);
console.log("9!=12   ->", a != b);
console.log("9!==12   ->", a !== b);



console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("");


b = "9";



console.log("(Number)9>9(String) ->", a > b);
console.log("(Number)9<9(String)   ->", a < b);
console.log("(Number)9>=9(String) ->", a >= b);
console.log("(Number)9<=9(String)  ->", a <= b);
console.log("(Number)9==9(String)  ->", a == b);
console.log("(Number)9===9(String) ->", a === b);
console.log("(Number)9!=9(String)  ->", a != b);
console.log("(Number)9!==9(String) ->", a !== b);

console.log("");

console.log("%c(Number)9=9(Number) SAME","color : orange;");
console.log("%c(Number)9.00=9(Number) SAME","color : orange;");
console.log("%c(Number)9.00=9.00(Number) SAME","color : orange;");

console.log("");

console.log("%c(String)9=9(String) SAME","color : orange;");
console.log("%c(String)9.00=9.00(String) SAME","color : orange;");

console.log("");

console.log("%c(Number)9.00=9(String) SAME","color : orange;");
console.log("%c(Number)9=9.00(String) SAME","color : orange;");
console.log("%c(Number)9.00=9.00(String) SAME","color : orange;");

console.log("");

console.log("%cNOTE====BUT (String)9.00=9(String)  NOT SAME 9.00 WILL HAVE HIGH VALUE ","color: aqua;");




console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("");



a = "9";
b = "129";


console.log("(String)9>129(String)  ->", a > b);
console.log("(String)9<129(String)   ->", a < b);
console.log("(String)9>=129(String)   ->", a >= b);
console.log("(String)9<=129(String)   ->", a <= b);
console.log("(String)9==129(String)   ->", a == b);
console.log("(String)9===129(String)   ->", a === b);
console.log("(String)9!=129(String)   ->", a != b);
console.log("(String)9!==129(String)   ->", a !== b);



console.log("%cIN ABOVE EXAMPLE BOTH VARIABLE HAVE STRING TYPE WITH NUMBER VALUE BUT THE RESULTS IS UNPREDICETABLE----------HOW THIS IS WORKING THE THING IS WHEN YOU COMPARE TWO STRINGS AND THOSE STRINGS CONTAIN NUMBER SO THE JAVA SCRIPT ONLY CARE ABOUT THE FIRST NUMBER JS DOES NOT CARE ABOUT NEXT NUMBER SO IN THIS EXAMPLE ITS NOT LIKE 9 > 129 BUT ITS MORE LIKE 9 > 1 OK" ,"color : red;");
console.log("");
console.log("%cAV VAT E S KE JAN 2 STRING JEMA NUMBER HOY AND EN COMAPRE KAR TO KAI RITE SAMAJVU TO HOTHI PELA DEKVANU KE BANNE STRING NO FIRST DIGIT AND EN COMPARE KARVANO JAVAB MALI JASE BUT AV EK POSSIBILITY E S KE TAN SU KARVANU JAN FIRST DIGIT SAME HOY TO TAN JOVANU KE LOWEST DIGIT NI STRING KAI S AND E NUMBER YAD RAK LEVANO JO PELO SAME HOY TO BIJO CHECK KARVANO JO BIJO SAME HOY TO TIJO E RITE KOI ALAG NUMBER MALI JASE AND JO LOWEST DIGIT NA BADHA NUMBER SAME HOY TO AT THE END HIGHEST DIGIT VALUE VALI STRING NI VALUE HIGH GANASHE OK ","color : lime ; ");


console.log("");



a = "96";
b = "999";

console.log("(String)9>999(String)  ->", a > b);
console.log("(String)9<999(String)   ->", a < b);
console.log("(String)9>=999(String)   ->", a >= b);
console.log("(String)9<=999(String)   ->", a <= b);
console.log("(String)9==999(String)   ->", a == b);
console.log("(String)9===999(String)   ->", a === b);
console.log("(String)9!=999(String)   ->", a != b);
console.log("(String)9!==999(String)   ->", a !== b);

console.log("");






console.log("");
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("");



a = "a";
b = "A";


console.log("(String)a>A(String)  97>65 ->", a > b);
console.log("(String)a<A(String)   ->", a < b);



console.log("");
console.log("WHEN COMPARING STRING WITH ANOTHER STRING WITH DIFFERENT UPPER AND LOWER CASE THE LOWER CASE WILL HAVE ALWAYS HIGH VALUE OK ");


console.log("");
console.log("%cWHEN WE COMPARE STRING WITH ANOTHER STRING THE VALUE WILL BE COUNT AS THEIR     (ASCII)    VALUES BY JAVA SCRIPT", "color: LIME");