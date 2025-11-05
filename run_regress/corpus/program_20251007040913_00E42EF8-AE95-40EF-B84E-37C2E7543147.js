const v2 = new Array(1);
var obj = v2;
obj[0] = 0;
obj[1] = 0;
function foo(a7) {
    let v8 = obj[a7];
    v8++;
}
obj[-8] = 3;
foo(1);
foo(2);
