

function minWindow(s, t) {
    //Write code here
    if (t==="") return "";
    const ct={},ws={};
    for (let c in t)
        ct[c]=(ct[c]||0)+1;
    let have=0;
    const need=Object.keys(ct).length;
    let res=[-1,-1];
    let resLength=Infinity;

    let left=0;
    for (let right=0;right<s.length;right++) {
        const c=s[right];
        ws[c]=(ws[c]||0)+1;
        if (ct[c]!==undefined && ws[c]===ct[c])
            have+=1;
        while (have===need) {
            if ((right-left+1)<resLength) {
                res=[left,right];
                resLength=right-left+1;
            }
            ws[s[left]]-=1;
            if (ct[s[left]]!==undefined && ws[s[left]]<ct[s[left]])
                have-=1;
            left+=1;
        }
    }

    const [l,r]=res;
    return resLength!=Infinity ? s.slice(l,r+1) : "";

}