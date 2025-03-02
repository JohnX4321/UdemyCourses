/*
 * Coding Exercise: Longest Sub string with Unique characters
Question:

Longest Unique char Substring - Given a string s, find the length of the longest substring without repeating characters.
 */

const maxLength =function(string){
    //Write code here
    let res=0,start=0;
    const vis={};
    for (let i=0;i<string.length;i++) {
        const c=string[i];
        if (c in vis)
            start=Math.max(start,vis[c]+1);
        res=Math.max(res,i-start+1);
        vis[c]=i;
    }
    return res;
}