// 6 The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

    
function vowelCheck(str)
{
    
    // Use match() with a regex that matches all vowels (both lowercase and uppercase)
    // If matchedVowels is null (no vowels found), return 0, otherwise return the length
    
    //g: This is the global flag, which ensures that the match is performed across the entire string, not just the first occurrence.

    //match checks str for aeiouAEIOU matches,
    //g ensueres that the match function doesnt stop till first occurence only
    const vowelarray = str.match(/[aeiouAEIOU]/g);
    console.log(vowelarray);
    return vowelarray ? vowelarray.length : 0;
    
}
    
let str = "WeLcOme"
console.log(vowelCheck(str));
// op
// [ 'e', 'O', 'e' ]
// 3

let str2 = "aeiou AEIOU hello this i great to hear that you are just too good guy to be handled"
console.log(vowelCheck(str2));

