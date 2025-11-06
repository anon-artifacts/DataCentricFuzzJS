function test1(a1, a2) {
    return a1.test(a2);
}
test1(/undefined/, undefined);
test1(/undefined/, undefined);
function test2(a13, a14) {
    return a13.test(a14);
}
test2(/null/, null);
test2(/null/, null);
function test3(a25, a26) {
    return a25.test(a26);
}
test3(/0/, 0);
test3(/0/, 0);
function test4(a37, a38) {
    return a37.test(a38);
}
test4(/12.12/, 12.12);
test4(/12.12/, 12.12);
function test5(a49, a50) {
    return a49.test(a50);
}
test5(/true/, true);
test5(/false/, false);
test5(/true/, true);
test5(/false/, false);
function test6(a69, a70) {
    return a69.test(a70);
}
const v73 = /object/;
test6(v73, {});
const v77 = /object/;
test6(v77, {});
test1(/test/, "test");
test1(/test/, "test");
test1(/undefined/, undefined);
test1(/undefined/, undefined);
test1(/null/, null);
test1(/null/, null);
test1(/0.1/, 0.1);
test1(/0.1/, 0.1);
test1(/20000/, 20000);
test1(/20000/, 20000);
const v121 = /object/;
test1(v121, {});
const v125 = /object/;
test1(v125, {});
