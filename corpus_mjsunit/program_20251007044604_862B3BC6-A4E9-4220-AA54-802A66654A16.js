function f0() {
}
let x = "global";
function getX() {
    return x;
}
let unscopables = { x: true };
const v9 = Symbol.unscopables;
let obj = { x: "obj", [v9]: unscopables };
with (obj) {
    x = "global-1";
    obj.x;
    unscopables.x = false;
    x = "obj-1";
    getX();
    obj.x;
    unscopables.x = true;
    x = "global-2";
    getX();
    obj.x;
    unscopables.x = false;
    x = "global-3";
    getX();
    obj.x;
    unscopables.x = true;
    x = "obj-2";
    getX();
    obj.x;
}
f0(0, 0);
