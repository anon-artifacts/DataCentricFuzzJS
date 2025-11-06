function compareToAtom(a1) {
    return a1 == "test";
}
function compareToAtomNe(a5) {
    return a5 != "test";
}
var st = "st";
function compareToRope(a11) {
    return a11 == ("te" + st);
}
function compareToRopeNe(a16) {
    var st = "st";
    return a16 != ("te" + st);
}
function main() {
    var test = "test";
    var foobar = "foobar";
    compareToAtom(test);
    compareToAtom(foobar);
    compareToAtomNe(test);
    compareToAtomNe(foobar);
    compareToRope(test);
    compareToRope(foobar);
    compareToRopeNe(test);
    compareToRopeNe(foobar);
}
for (let i44 = 0; i44 < 100000; i44++) {
    main();
}
