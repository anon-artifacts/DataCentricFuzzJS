const v4 = new Boolean(true);
const v6 = new Boolean(false);
var a = [true,false,v4,v6];
const v12 = new Boolean(true);
const v14 = new Boolean(false);
const v16 = -1;
const v24 = +0;
const v26 = -0;
const v30 = new Object();
const v48 = new Number(0);
const v50 = new Number(1);
var b = [true,false,v12,v14,v16,0,1,2,1,1.1,0,v24,v26,null,,v30,"","abc","-1","0","1","2","true","false","t","f","True","False"," 1.00 "," 1. "," +1.0 ",v48,v50];
for (let i54 = 0; i54 < a.length; i54++) {
    for (let i61 = 0; i61 < b.length; i61++) {
        print((((a[i54] + " == ") + b[i61]) + ": ") + (a[i54] == b[i61]));
    }
}
