function strings()
{
    var string1 = document.getElementById("initStr").value;
    //var string2 = document.getElementById("sndStr").value;
    alert(initStr);
    //alert(sndStr);

    // THESE that we are working on are what we call concatenating. Concatenate means to add together.
    //var string3 = string1 + string2;
    //document.getElementById("updatedString").innerHTML = "Strings are concatenated " + string3;
    //document.getElementById("updatedString").innerHTML = "substring start at 0 with a len of 3 of string3 = " + string3.substring(0,3);
    //the first num 0 = the starting position, the second num 3 = the length when looking at substrings. 
    //var len = string3.length;
    //document.getElementById("updatedString").innerHTML = " length of string3 = " + len;
    //LENGTH
    //length is helpful when wanting to know the number of letters, Exmp,when testing the length, making sure the text isn't to long.
    //REPLACE
    //replace lets us replace onestring with another. Everthing in string3 is chnged to lower case.
    //var replTB = string3.toLowerCase();
    // /g=replace all occurences
    //replTB = replTB.replace("tony", "darnell");
    // use the above format to use the variable replTB
    //*** these are only comments TB
    //document.getElementById("updatedString").innerHTML = " replaced tony with darnell " + replTB;
     // String reversal
     //**** Below is the format for string reversal
    var rev = string1;
    var splitString = string1.split("");
    alert(splitString);
    var reverseArray = splitString.reverse();
    //alert(rev);
    var joinArray = reverseArray.join("");
    alert(joinArray);
    if (joinArray == string1) 
        {
            confirm("This is a Palindrome")

        }
    else if(joinArray !== string1)   
    {
        alert("Not a Palindrome")
    } 
}   

