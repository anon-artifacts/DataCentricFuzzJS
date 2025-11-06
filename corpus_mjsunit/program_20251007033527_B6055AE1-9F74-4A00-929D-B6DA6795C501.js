var global = true;
global = false;
function f() {
    return !global;
}
f();
