console.log("Tests that array popping properly cleans up the popped element.");
function foo(a4) {
    var x = a4.pop();
    a4[a4.length + 1] = 42;
    return [x,a4.pop(),a4.pop()];
}
for (let i15 = 0; i15 < 200; i15++) {
    foo([1,2]);
}
foo([1,2]);
