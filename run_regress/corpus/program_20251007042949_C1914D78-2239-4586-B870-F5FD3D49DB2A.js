function setx() {
    x = 1;
}
function getx() {
    return x;
}
setx();
setx();
function f8() {
}
this.__defineSetter__("x", f8);
function f12() {
    return 2;
}
this.__defineGetter__("x", f12);
setx();
getx();
getx();
getx();
