function write(a1) {
    print(a1 + "");
}
function foo() {
}
const v11 = -10;
const v19 = new Array(10);
var all = [0,10.2,1,v11,"1","hello",,true,false,v19,null,Number.MAX_VALUE,Number.POSITIVE_INFINITY];
for (let i27 = 0; i27 < all.length; ++i27) {
    for (let i34 = 0; i34 < all.length; ++i34) {
        write((((("a[" + i27) + "] == a[") + i34) + "] = ") + (all[i27] == all[i34]));
    }
}
