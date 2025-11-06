function test0(a1) {
    a1[1];
    a1.reverse();
    return a1[0];
}
print("test0: " + test0([2,3]));
print("test0: " + test0([2,3]));
function test1(a21) {
    a21[1];
    a21.shift();
    return a21[0];
}
print("test1: " + test1([2,3]));
print("test1: " + test1([2,3]));
function test2(a40) {
    a40[1];
    var b = a40.slice(0, 0);
    return a40[0];
}
print("test2: " + test2([2,3]));
print("test2: " + test2([2,3]));
function test3(a62) {
    a62[1];
    a62.splice(0, 0);
    return a62[0];
}
print("test3: " + test3([2,3]));
print("test3: " + test3([2,3]));
function test4(a83) {
    a83[1];
    a83.unshift();
    return a83[0];
}
print("test4: " + test4([2,3]));
print("test4: " + test4([2,3]));
