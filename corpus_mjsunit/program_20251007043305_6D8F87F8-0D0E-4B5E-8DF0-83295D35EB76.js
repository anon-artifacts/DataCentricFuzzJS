function write(a1) {
    print(a1 + "");
}
function foo() {
}
const v13 = new Boolean(true);
const v15 = new Boolean(false);
const v18 = +0;
const v20 = -0;
const v26 = Number.MAX_VALUE;
const v27 = Number.MIN_VALUE;
const v28 = Number.NaN;
const v29 = Number.POSITIVE_INFINITY;
const v30 = Number.NEGATIVE_INFINITY;
const v31 = new Number(NaN);
const v34 = new Number(+0);
const v37 = new Number(-0);
const v39 = new Number(0);
const v41 = new Number(1);
const v43 = new Number(10);
const v45 = new Number(10.1);
const v47 = new Number(Number.MAX_VALUE);
const v49 = new Number(Number.MIN_VALUE);
const v51 = new Number(Number.NaN);
const v53 = new Number(Number.POSITIVE_INFINITY);
const v55 = new Number(Number.NEGATIVE_INFINITY);
const v60 = "hel" + "lo";
const v63 = new String("");
const v65 = new String("hello");
const v69 = new String("he" + "llo");
const v71 = new Object();
const v75 = [1,2,3];
const v76 = new Object();
var all = [,null,true,false,v13,v15,NaN,v18,v20,0,1,10,10.1,v26,v27,v28,v29,v30,v31,v34,v37,v39,v41,v43,v45,v47,v49,v51,v53,v55,"","hello",v60,v63,v65,v69,v71,v75,v76,[1,2,3],foo];
for (let i84 = 0; i84 < all.length; ++i84) {
    for (let i91 = 0; i91 < all.length; ++i91) {
        write((((((((("a[" + i84) + "](") + all[i84]) + ") || a[") + i91) + "](") + all[i91]) + ") = ") + (all[i84] || all[i91]));
    }
}
