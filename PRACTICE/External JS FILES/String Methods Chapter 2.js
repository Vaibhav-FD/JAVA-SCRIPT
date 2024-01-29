console.log("%c===STRING METHODS CHAPTER 2===", "color : aqua ; font-size: 1.2rem;");



    console.log("%c\n\n******************************************************************************************************************", "color:purple;");

    let testString = "Java Script Is Dynamically Typed Language";

    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;", testString, "\n\n\n");


    console.log("%cTHE indexOf('string',start index position) METHOD IS USED TO GET INDEX VALUE", "color:khaki;");

    console.log('testString.indexOf("Type")  =  ', testString.indexOf("Type"));
    console.log('testString.indexOf("type")  =  ', testString.indexOf("type"));
    console.log('testString.indexOf("ript")  =  ', testString.indexOf("ript"));
    console.log('testString.indexOf("a")  =  ', testString.indexOf("a"));
    console.log('testString.indexOf("a",12)  =  ', testString.indexOf("a", 12));
    console.log('testString.indexOf("z")  =  ', testString.indexOf("z"), "\t\t***z IS NOT IN OUR STRING SO IT RETURN -1.***");
    console.log('testString.indexOf(" ")  =  ', testString.indexOf(" "), "\t\t***WHITE SPACE.***");
    console.log('testString.indexOf("")  =  ', testString.indexOf(""));
    console.log('testString.indexOf()  =  ', testString.indexOf());


    console.log("%cWELL THERE IS ACTUALLY search() METHOD WHICH WORKS SAME LIKE indexOf() BUT indexOf() IS MORE POWERFUL BECUASE IT CAN TAKE 2 PARAMETERS AND search() CAN ONLY TAKE ONE PARAMETER SO USE indexOf() OK.", "color:red;");



    console.log("%c\n\n******************************************************************************************************************", "color:purple;");

    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;", testString, "\n\n\n");


    console.log("%cTHE padStart(length+count,'string'or exression) AND padEnd(length+count,'string'or exression) IS USED TO INSERT STRING IN STRING", "color:khaki;");

    console.log('testString.padStart(45,"9")  ===   ', testString.padStart(45, "9"));
    console.log('testString.padEnd(45,"9")  ===  ', testString.padEnd(45, "9"), "\n\n\n\n");

    console.log('testString.padStart(45,"hi")  ===   ', testString.padStart(45, "hi"));
    console.log('testString.padEnd(45,"hi")  ===  ', testString.padEnd(45, "hi"), "\n\n\n\n");

    console.log('testString.padStart(45," ")  ===   ', testString.padStart(45, " "));
    console.log('testString.padEnd(45," ")  ===  ', testString.padEnd(45, " "), "\n\n\n\n");

    console.log('testString.padStart(45,"")  ===   ', testString.padStart(45, ""));
    console.log('testString.padEnd(45,"")  ===  ', testString.padEnd(45, ""), "\n\n\n\n");

    console.log('testString.padStart(45,"HELLO HOW ARE YOU")  ===   ', testString.padStart(45, "HELLO HOW ARE YOU"));
    console.log('testString.padEnd(45,"HELLO  HOW ARE YOU")  ===  ', testString.padEnd(45, "HELLO  HOW ARE YOU"), "\n\n\n\n");

    console.log('testString.padStart(39,"HELLO HOW ARE YOU")  ===   ', testString.padStart(39, "HELLO HOW ARE YOU"));
    console.log('testString.padEnd(39,"HELLO  HOW ARE YOU")  ===  ', testString.padEnd(39, "HELLO  HOW ARE YOU"), "\n\n\n\n");

    console.log("%cBEFORE USING padStart() AND padStart() YOU SHOULD KNOW THE LEGNTH OF STRING SO THAT YOU CAN GIVE FIRST COUNT PARAMETER.\n\nLIKE HERE LEGNTH IS 41 SO IN SECOND LAST EXAMPLE 45-41 = 4 SO IT WILL ONLY TAKE FIRST 4 LETTERS.\n\nNOW IN LAST EXAMPLE WE HAVE COUNT LESS THAN ACTUAL LENGTH OF STRING SO IT WILL NOT WORK AND SHOW EITHER 41-39 = -2 \n\nSO KEEP IN MIND THAT IF YOU WANT TO INSERT THAN THE COUNT MUST BE HIGHER THAN LENGTH IF IT IS LOWER THAN LENGTH THAN IT WILL NOT WORK OK EVEN THOUGH THE ORIGINAL STRING HAS WHITE SPACE IT WILL NOT WORK.", "color:red;");





    console.log("%c\n\n******************************************************************************************************************", "color:purple;");

    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;", testString, "\n\n\n");


    console.log("%cTHE startsWith('string',index position) AND endsWith('string',index position+1) METHOD IS USED TO CHECK WHEATER IT IS STARING WITH GIVEN STRING OR NOT", "color:khaki;");

    console.log('testString.startsWith("Jav")  ==  ', testString.startsWith("Jav"));
    console.log('testString.endsWith("age")  ==  ', testString.endsWith("age"));

    console.log('testString.startsWith("Dynamically")  ==  ', testString.startsWith("Dynamically"));
    console.log('testString.endsWith("Typed")  ==  ', testString.endsWith("Typed"));

    console.log('testString.startsWith("ava")  ==  ', testString.startsWith("ava"));
    console.log('testString.endsWith("Lang")  ==  ', testString.endsWith("Lang"));

    console.log('testString.startsWith("Lang", 33)  ==  ', testString.startsWith("Lang", 33));
    console.log('testString.endsWith("ript", 11)  ==  ', testString.endsWith("ript", 11));



    console.log("%c\n\n******************************************************************************************************************", "color:purple;");

    console.log("%cORIGINAL STRING  =", "color:lime; text-decoration:underline 2px solid hotpink;", testString, "\n\n\n");


    console.log("%cWE CAN CONVET OUR STRING TO AN ARRAY WITH ->  split() METHOD OK", "color:yellow;");

    console.log('testString.split()  ==  ',testString.split());
    console.log('testString.split(" ")  ==  ',testString.split(" "));
    console.log('testString.split("")  ==  ',testString.split(""));


    // let str = "HTML,CSS,JS";
    // let arr = str.split(",");
    // console.log(arr); // ["HTML", "CSS", "JS"]