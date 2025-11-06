function escapeme() {
}
function f1(a2) {
    escapeme(arguments);
    var y = ++a2;
    return a2 + y;
}
for (let i9 = 0; i9 < 100; ++i9) {
    f1(2);
}
function f2(a19) {
    escapeme(arguments);
    var y = --a19;
    return a19 + y;
}
for (let i26 = 0; i26 < 100; ++i26) {
    f2(2);
}
function f3(a36) {
    escapeme(arguments);
    var y = a36++;
    return a36 + y;
}
for (let i43 = 0; i43 < 100; ++i43) {
    f3(2);
}
function f4(a53) {
    escapeme(arguments);
    var y = a53--;
    return a53 + y;
}
for (let i60 = 0; i60 < 100; ++i60) {
    f4(2);
}
