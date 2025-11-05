var global = /./g;
function f2() {
}
global.lastIndex = { valueOf: f2 };
function f5(a6) {
    return "X";
}
("x").replace(global, f5);
global.lastIndex;
