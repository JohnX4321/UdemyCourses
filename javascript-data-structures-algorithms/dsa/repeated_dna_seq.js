/*
 * Repeated DNA Sequence
Repeated DNA Sequence:

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

•For example, "ACGAATTCCG" is a DNA sequence.

When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example:

Input: s = ”GAAAATCCCCGAAAATCCCCGAAAAAGGGTTT"

Output: [”GAAAACCCCC",”TCCCCGAAAA"]
 */

function findRepeatedDnaSequences(s) {
    //Given Length of a sequence = 10
    const L = 10;
    //Write Code here
    const n=s.length;
    if (n<=L) return [];
    const toInt={'A':0,'C':1,'G':2,'T':3};
    const nums=Array.from(s).map(c=>toInt[c]);
    const a=4;
    const aL=Math.pow(a,L);
    const seen=new Set();
    const output=new Set();
    let h=0;
    for (let start=0;start<=n-L;start++) {
        if (start!==0) {
            h=h*a-nums[start-1]*aL+nums[start+L-1];
        } else {
            for (let i=0;i<L;i++){
                h=h*a+nums[i];
            }
        }
        if (seen.has(h))
            output.add(s.slice(start,start+L));
        seen.add(h);
    }
    return Array.from(output);
}
