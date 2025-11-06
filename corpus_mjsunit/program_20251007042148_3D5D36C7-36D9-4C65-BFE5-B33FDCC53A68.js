console.log("Tests that UInt32ToNumber and OSR exit are aware of copy propagation and correctly recover both versions of a variable that was subject to a UInt32ToNumber cast.");
function foo(a4) {
    var a = a4 | 0;
    var x;
    var y;
    return [x = a,y = a >>> 0];
}
for (let i16 = 0; i16 < 100; ++i16) {
    foo(-1);
}
