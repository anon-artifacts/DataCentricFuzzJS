try { console.log("Tests that if we have a tower of large numerical constants being added to each other, the DFG knows that a sufficiently large tower may produce a large enough value that overflow check elimination must be careful."); } catch (e) {}
function foo(a4, a5) {
    return ((((((((((((((((((((((((((((((((((a4 + a5) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 281474976710655) + 30) | 0;
}
try { noInline(foo); } catch (e) {}
silentTestPass = true;
for (let i80 = 0; i80 < 400; i80++) {
    var a;
    var b;
    var c;
    var expected;
    if (!i80) {
        a = 1;
        b = 2;
        expected = 0;
    } else {
        a = 2147483645;
        b = 2147483644;
        expected = -10;
    }
    let v102;
    try { v102 = foo(a, b); } catch (e) {}
    v102 === expected;
}
