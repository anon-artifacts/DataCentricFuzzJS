var global = true;
global = false;
function f() {
    global = 1;
    return !global;
}
f();
