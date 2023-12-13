console.log("%c=========STRING METHODS CHAPTER 1=========", "color : aqua ; font-size: 1rem; ");





    console.log("%c******************************************************************************************************************", "color:purple;");

    console.log("1.STRINGS ARE" + " %cIMMUTABLE", "color:red; text-decoration:underline;", "IN JAVA SCRIPT MEANS YOU CAN NOT CHANGE OR MODIFY AN ORIGINAL STRING.\n\n");

    console.log("2."+"%cSTRING METHODS DO NOT CHNAGE OR MODIFY AN ORIGINAL STRING ISTEAD OF IT RETURNS NEW STRING.\n", "color: red; text-decoration:underline;\n\n");

    console.log("3.STRINGS HAVE " + "%cINDEX VALUES JUST LIKE ARRAY", "color:red; text-decoration:underline;", "WHICH STARTS FROM 0.\n\n");

    console.log("4.STRINGS ARE " + "%cCASE-SENSITIVE", "color:red; text-decoration:underline;", "IN JAVA SCRIPT.\n\n");

    console.log("5.JAVA SCRIPT ALWAYS DO STRING OPERATION " + "%cFROM LEFT TO RIGHT.", "color:red; text-decoration:underline;\n\n");

    console.log("%c******************************************************************************************************************", "color:purple;");




    let testString = "Hyper Text Markup Language";


    console.log("%cORIGINAL STRING =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n\n");


    console.log("%cWe Can Check The Length Of String Including White Spaces WITH ->  length", "color:khaki;");

    console.log("testString.length  =  ", testString.length);


    console.log("%c******************************************************************************************************************", "color:purple;");
    
    console.log("%cORIGINAL STRING =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n");


    console.log("%c\n\nWe Can Convert String To Lower And Upper Cases WITH ->  toUpperCase() AND toLowerCase()", "color:khaki;");


    console.log("testString.toUpperCase()  =  ", testString.toUpperCase());
    console.log("testString.toLowerCase()  =  ", testString.toLowerCase());



    console.log("%c******************************************************************************************************************", "color:purple;");
    
    testString = "         JAVA   SCRIPT        ";

    console.log("%cORIGINAL STRING =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n\n");


    console.log("%cWe Can Remove Start , End And Both Spaces Of Strings WITH  ->  trim() AND trimStart() AND trimEnd()", "color:khaki;");

    console.log("testString.trim()  =  ", testString.trim());
    console.log("testString.trimStart()  =  ", testString.trimStart());
    console.log("testString.trimEnd()  =  ", testString.trimEnd());

    console.log("%c\nBUT IT DOES NOT REMOVE SPACES BETWEEN WORDS OK.","color:deeppink;");




    console.log("%c******************************************************************************************************************", "color:purple;");
    
    testString = "JAVA SCRIPT";

    console.log("%cORIGINAL STRING =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n\n");

    console.log("%c\nWe Can Merge Multiple Differnet Strings WITH -> concat() EVEN + OPERATOR WILL CONCAT STRINGS", "color:khaki;");

    console.log('testString.concat(" Is Language Of The Web.")  =  ', testString.concat(" Is Language Of The Web."));
    console.log('testString.concat(" Was Created"," By Brendan Eich ","In 1995")  =  ', testString.concat(" Was Created", " By Brendan Eich ", "In 1995"));
    console.log('"JAVA"+"SCRIPT"', "=", "JAVA" + "SCRIPT");


    console.log("%c******************************************************************************************************************", "color:purple;");
    
    testString = "Java Script Was Created By Brendan Eich In 1995";

    console.log("%cORIGINAL STRING =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n\n");

    console.log("%c\nWe Can Check If The String Include Particular String Or Not WITH ->  includes('string')", "color:khaki;");


    console.log("testString.includes('Eich')  =  ", testString.includes('Eich'));
    console.log("testString.includes('1996')  =  ", testString.includes('1996'));
    console.log("testString.includes('Java')  =  ", testString.includes('Java'));
    console.log("testString.includes('java')  =  ", testString.includes('java'));
    console.log("testString.includes(' ')  =  ", testString.includes(' '),"\t\t***THIS IS TRUE BECUASE OUR STRING HAS WHITE SPACE OK.***");
    console.log("testString.includes()  =  ", testString.includes());
    console.log("testString.includes('')  =  ", testString.includes(''));


    console.log("%cNOTE --- includes('') WILL ALWAYS RETURN TRUE REGARD LESS OF WHITE SPACE AND includes() WILL ALWAYS RETURN FALSE OK.","color:red;");



    console.log("%c******************************************************************************************************************", "color:purple;");

    console.log("%cORIGINAL STRING =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n\n");

    console.log("%c\nWe Can Get Chacter By Index Position Value And ASCII Value WITH  -> charAt(index position) AND charCodeAt(index position)", "color:khaki;");

    console.log("testString.charAt(0)  =  ", testString.charAt(0));
    console.log("testString[2]  =  ", testString[2]);
    console.log("testString.charCodeAt(0)  =  ", testString.charCodeAt(0));
    console.log("testString.charAt()   =   ", testString.charAt());
    console.log("testString.charAt(48)   =   ", testString.charAt(48));
    console.log("testString.charCodeAt(48)  =  ", testString.charCodeAt(48));

    console.log("%cNOTE --- HERE THE LENGHT OF STRING IS 47 AND I PUT 48 SO THAT'S WHY IT IS EMPTY SAME WILL HAPPEN IF YOU PUT -1 OR ANY NEGETIVE VALUE BUT IF IT IS charCodeAt() THAN IT WILL RETURN NaN OK.","color:red;");



    console.log("%c\n\n\n******************************************************************************************************************", "color:purple;");



    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n");


    console.log("%c\n\nWe Can Slice Or Cut Strings WITH ->  slice(start,end+1)", "color:khaki;");

    console.log("testString.slice(3,9)  =  ", testString.slice(3, 9));

    console.log("testString.slice(3,54)  =  ", testString.slice(6, 54),"\t\t\t***EVEN THOUGH LENGHT IS 48 IT WILL NOT GENERATE AN ERROR.***");

    console.log("testString.slice(-7,-1)  =  ", testString.slice(-7,-1));
    console.log("testString.slice(-1)  =  ", testString.slice(-1));
    console.log("testString.slice(-9)  =  ", testString.slice(-9));

    console.log("testString.slice(9)  =  ", testString.slice(9));
    console.log("testString.slice()  =  ", testString.slice());
    console.log("testString.slice(0)  =  ", testString.slice(0));

    console.log("%cNOTE --- EVEN THOUGH slice() ACCEPTS NEGETIVE - VALUES YOU SHOULD USE POSITIVE VALUES AS MUCH AS YOU CAN OK.\nTHERE IS ALSO substring() METHOD WHICH WORKS SAME LIKE slice() THE DIFFERNCE IS IT DOES NOT ALLOW NEGETIVE - VALUES OK.","color:red;");




    
    console.log("%c\n\n\n******************************************************************************************************************", "color:purple;");


    testString = "Java Script Was Created In 1995 At Netscape , Now Java Script Is Very Popular And Most Used Language. ";

    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n");




    console.log("%c\n\nWe Can Replace A String WITH -> replace('old string','new string') AND repalceAll('old string','new string')", "color:khaki;");

    console.log("testString.replace('Java Script','C Language')   ===   ", testString.replace('Java Script', 'C Language'));

    console.log("%cWE CAN SEE THAT THE SECOND Java Script IS NOT REPLACED BECAUSE IT WILL ONLY WORK ON FIRST OCCURUNCE.\nNOW THERE ARE 2 WAYS TO REPLACE ALL OCCURUNCE OF STRING \n", "color:hotpink;");

    console.log("1.  testString.replace(/Java Script/g,'C Language')   ===   ", testString.replace(/Java Script/g, 'C Language'), "\n\n");

    console.log("%c/g IS A FLAG WHICH SEARCH STRINGS GLOABLLY.\n", "color:lime;");

    console.log("2.  testString.replaceAll('Java Script','C Language')   ===   ", testString.replaceAll('Java Script', 'C Language'), "\n\n\n");


    console.log("testString.replace('JAVA SCRIPT','C Language')   ===   ", testString.replace('JAVA SCRIPT', 'C Language'), "\n\n");



    console.log("%cEVEN THOUGH STRINGS ARE CASE-SENSITIVE WE CAN USE /i TO MAKE IT EASIER WITH OUT WORRYING ABOUT CASE-SENSITIVITY \n", "color:hotpink;");


    console.log("testString.replace(/JAVA SCRIPT/i,'C Language')   ===   ", testString.replace(/JAVA SCRIPT/i, 'C Language'), "\n\n");

    console.log("testString.replace(/JAVA SCRIPT/gi,'C Language')   ===   ", testString.replace(/JAVA SCRIPT/gi, 'C Language'), "\n\n");

    console.log("%cNOTE --- THIS FLAG EXPRESSION LIKE g AND i CAN NOT BE USED IN EVERY METHODS OK YOU CAN ONLY USE THIS IN replace() , replaceAll() , search() , match() , matchAll() , split(). \n", "color:red;");









    console.log("%c\n\n\n******************************************************************************************************************", "color:purple;");

    
    
    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;font-size:1rem;", testString, "\n\n\n\n");
    
    console.log("%c\n\nIf We Want To Check The String Is Avilable Or Not And We Also Want It's Index Value Than We Can USE ->  match('string') AND match('string')\n\n\n", "color:khaki;");


    console.log('testString.match("Script")  =  ',testString.match("Script"),"\n\n\n");
    console.log('testString.match(/Script/g)  =  ',testString.match(/Script/g),"\n\n\n");


    console.log("%c---------DOUBT---------.","color:red;");

    console.log('testString.match()  =  ',testString.match(),"\n\n\n");
    console.log('testString.match("")  =  ',testString.match(""),"\n\n\n");
    console.log('testString.match(" ")  =  ',testString.match(" "),"\n\n\n");
    console.log('testString.matchAll("Script")  =  ',testString.matchAll("Script"),
    "\n\n\n");


    console.log("%cNOTE --- THIS METHOD RETURNS ARRAY AS A RESULT.","color:red;");
