/*
 * Coding Exercise: Group Anagrams
Question:

Group Anagrams - Given an array of strings consisting of lower case English letters, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
 */

const groupAnagrams = function(strings){
    //Write code here
    const sorted=strings.map(x=>x.split('').sort().join(''));
    const m={};
    for (let i=0;i<strings.length;i++) {
        if (!m[sorted[i]]) m[sorted[i]]=[strings[i]];
        else m[sorted[i]].push(strings[i]);
    }
    return Object.values(m);
}