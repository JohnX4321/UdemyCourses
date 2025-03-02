/*
 * Coding Exercise: Isomorphic Strings
Question :

Isomorphic Strings - Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.
 */

const checkIsomorphic = function(s,t){
    //Write code here
    if (s.length!==t.length) return false;
    const sm={},tm={};
    for (let i=0;i<s.length;i++) {
        let cs=s[i],ct=t[i];
        if (!sm[cs]) sm[cs]=ct;
        if (!tm[ct]) tm[ct]=cs;
        if (sm[cs]!==ct || tm[ct]!==cs) return false;
    }
    return true;
}