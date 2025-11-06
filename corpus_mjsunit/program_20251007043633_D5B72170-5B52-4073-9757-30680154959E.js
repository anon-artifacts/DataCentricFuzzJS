console.log("Tests that we use Phantom on the base of put_by_base correctly.");
function foo(a4) {
    var x = a4;
    var y = a4.f;
    if (y) {
        a4.g.h;
        return !x;
    }
    return (((a4 + a4) + a4) + a4) + a4;
}
for (let i16 = 0; i16 < 200; ++i16) {
    const v23 = i16 < 190;
    const v26 = { h: 3 };
    const v27 = { f: 42, g: v26 };
    const v29 = {};
    foo(v23 ? v27 : { f: 42, g: v29 });
}
