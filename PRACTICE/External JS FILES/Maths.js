console.log("%cMATH IN JAVA SCRIPT","color: lime; font-size: 1.2rem;");

console.log("========================================================\n\n");

console.log("%c*********KEEP IN MIND THAT THE TYPE OF Math IS AN OBJECT********\n","color:deeppink;");

console.log("typeof Math = ",typeof Math,"\n\n");

console.log("%c*********","color:deeppink;");

console.log("---STATIC PROPERTIES---\n\n");

console.log("Value Of PI -> ",Math.PI,"\n\n");

console.log("Value Of Euler's Number Is -> ",Math.E,"\n\n");

console.log("%c*******************************************************","color: lightcoral;");



console.log("---STATIC METHODS---\n\n");

console.log("CUBE ROOTE OF 729 - >",Math.cbrt(729),"\n\n");

console.log("SQUARE ROOTE OF 144 - >",Math.sqrt(144),"\n\n");

console.log("POWER OF 21 3 - >",Math.pow(21,3),"\n\n");

console.log("IMUL(MULTIPLICATION) OF 6 3 - >",Math.imul(6,3),"\n\n");



console.log("--------------------------------------------------------------------\n");

console.log("%cMath.sign() WILL CHECK THE NUMBER IS POSITIVE OR NEGETIVE IF NUMBER IS POSITIVE THAN IT WILL RETURN 1 BUT IF NUMBER IS NEGETIVE IT WILL RETURN -1 ALTHOUGH IF YOU PUT 0 IN PARAMETER IT WILL RETURN 0 IF YOU PUT -0 IT FILL RETURN -0.\n\n","color:aqua;");

console.log("SIGN CHECKER OF -9 -> ",Math.sign(-9));

console.log("SIGN CHECKER OF 9 -> ",Math.sign(9));

console.log("SIGN CHECKER OF 9.12 -> ",Math.sign(9.12));

console.log("SIGN CHECKER OF -9.12 -> ",Math.sign(-9.12));

console.log("SIGN CHECKER OF 0 -> ",Math.sign(0));

console.log("SIGN CHECKER OF -0 -> ",Math.sign(-0));

console.log("SIGN CHECKER OF '9'-> ",Math.sign("9"));


console.log("--------------------------------------------------------------------\n");

console.log("%cMath.min() AND Math.max() WILL RETURN MAX AND MIN VALUE INSIDE PARAMETERS THE ORDER DOES NOT MATTER OK.\n\n","color:aqua;");


console.log("MINIMUM VALUE CHECK OF  3 , 6 , 9 -> ",Math.min(9,6,3));
console.log("MINIMUM VALUE CHECK OF  9 , 6 , 3 -> ",Math.min(3,6,9));
console.log("MINIMUM VALUE CHECK OF  -3 , -6 , -9 -> ",Math.min(-9,-6,-3));
console.log("MINIMUM VALUE CHECK OF  -9 , -6 , -3 -> ",Math.min(-3,-6,-9));

console.log("\n");

console.log("MINIMUM VALUE CHECK OF  3 , 6 , 9 -> ",Math.max(9,6,3));
console.log("MINIMUM VALUE CHECK OF  9 , 6 , 3 -> ",Math.max(3,6,9));
console.log("MINIMUM VALUE CHECK OF  -3 , -6 , -9 -> ",Math.max(-9,-6,-3));
console.log("MINIMUM VALUE CHECK OF  -9 , -6 , -3 -> ",Math.max(-3,-6,-9));




console.log("--------------------------------------------------------------------\n");

console.log("%cMath.trunc() WILL REMOVE . FLOATING VALUE AND RETURN INTEGER VALUE OK.\n\n","color:aqua;");



console.log("TRUNC OF 9.12 - >",Math.trunc(9.12),"\n");

console.log("TRUNC OF 9 - >",Math.trunc(9),"\n");

console.log("TRUNC OF 6.3 - >",Math.trunc(6.3),"\n");

console.log("TRUNC OF 6.9 - >",Math.trunc(6.9),"\n");

console.log("TRUNC OF -9.12 - >",Math.trunc(-9.12),"\n");

console.log("TRUNC OF -9.99 - >",Math.trunc(-9.99),"\n");


console.log("--------------------------------------------------------------------\n");

console.log("%cMath.ciel() SO IN CIEL IT WILL COMAPRE PARAMETER WITH NEXT VALUE AND IT WILL RETURN HIEGHST VALUE.\n\n","color:aqua;");

console.log("FOR EXAMPLE - 9.12 IS INSIDE PARAMTER SO 9 AND 10 NOW WHICH VALUE IS HIGHEST IN THESE 2");



console.log("CEIL OF 9.12 - >",Math.ceil(9.12),"\n");

console.log("CEIL OF 9 - >",Math.ceil(9),"\n");

console.log("CEIL OF 6.3 - >",Math.ceil(6.3),"\n");

console.log("CEIL OF 6.9 - >",Math.ceil(6.9),"\n");

console.log("CEIL OF -9.12 - >",Math.ceil(-9.12),"\n");


console.log("--------------------------------------------------------------------\n");

console.log("%cMath.floor() SO IN FLOOR IT WILL COMAPRE PARAMETER WITH NEXT VALUE AND IT WILL RETURN LOWEST VALUE.\n\n","color:aqua;");

console.log("FOR EXAMPLE - 9.12 IS INSIDE PARAMTER SO 9 AND 10 NOW WHICH VALUE IS LOWEST IN THESE 2");


console.log("FLOOR OF 9.12 - >",Math.floor(9.12),"\n");

console.log("FLOOR OF 9 - >",Math.floor(9),"\n");

console.log("FLOOR OF 6.3 - >",Math.floor(6.3),"\n");

console.log("FLOOR OF 6.9 - >",Math.floor(6.9),"\n");

console.log("FLOOR OF -9.12 - >",Math.floor(-9.12),"\n");


console.log("--------------------------------------------------------------------\n");

console.log("%cMath.round() SO IN ROUND THE NUMBER WILL BE ROUND OF ON BASE OF FLOATING VALUE IF VALUES FLOATING POINT NUMBER IS 50 OR MORE THAN THAT THAN IT WILL RETURN NEXT NUMBER BUT IF IT IS LESS THAN 50 THAN IT WILL RETURN SAME NUMBER , BUT KEEP IN MIND IF .50 IS IN NEGETIVE VALUE THAN IT WILL NOT RETURN NEXT NUMBER IT WILL RETURN SAME NUMBER OK.\n\n","color:aqua;");

console.log("FOR EXAMPLE - 9.12 IS INSIDE PARAMTER SO 9 AND 10 NOW WHICH VALUE IS LOWEST IN THESE 2");


console.log("ROUND OF 9.12 - >",Math.round(9.12),"\n");

console.log("ROUND OF 9 - >",Math.round(9),"\n");

console.log("ROUND OF 6.3 - >",Math.round(6.3),"\n");

console.log("ROUND OF 6.49 - >",Math.round(6.49),"\n");

console.log("ROUND OF 6.50 - >",Math.round(6.50),"  ???\n");

console.log("ROUND OF 6.9 - >",Math.round(6.9),"\n");

console.log("ROUND OF -6.3 - >",Math.round(-6.3),"\n");

console.log("ROUND OF -6.49 - >",Math.round(-6.49),"\n");

console.log("ROUND OF -6.50 - >",Math.round(-6.50),"  ???\n");

console.log("ROUND OF -6.9 - >",Math.round(-6.9),"\n");



console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n\n");

console.log("%cEVEN THOUGH THERE ARE MORE MATH METHODS AND PROPETIES BUT THIS IS ENOUGH.","color: red ; font-size: 1.5rem ;");





















