function test0(a1) {
    for (let i3 = a1.length; i3--;) {
        c = a1[i3];
        b = a1.slice(i3);
    }
}
var arr = [0,1,2,3];
test0(arr);
test0(0);
print("pass");
