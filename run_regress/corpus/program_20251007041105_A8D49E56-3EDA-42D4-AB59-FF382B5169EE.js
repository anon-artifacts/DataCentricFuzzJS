JSON.stringify({ x: 1 }, ["x",1,"x",1]);
JSON.stringify({ 1: 1 }, ["x",1,"x",1]);
JSON.stringify({ 1: 1 }, ["1",1,"1",1]);
JSON.stringify({ 1: 1 }, [1,"1",1,"1"]);
var fired = 0;
const v41 = {
    get x() {
        fired++;
        return 2;
    },
};
var getter_obj = v41;
JSON.stringify(getter_obj, ["x","y","x"]);
JSON.stringify({ x: 3, y: 4 }, ["y","x"]);
JSON.stringify({ x: 3, y: 4, 1: 2 }, ["y",1,"x"]);
var a = { x: 8 };
JSON.stringify(a, ["__proto__","x","__proto__"]);
a.__proto__ = { x: 7 };
JSON.stringify(a, ["__proto__","x"]);
const v85 = { x: 9 };
var b = { __proto__: v85 };
JSON.stringify(b);
JSON.stringify(b, ["x"]);
var c = { x: 10 };
Object.defineProperty(c, "x", { enumerable: false });
JSON.stringify(c);
JSON.stringify(c, ["x"]);
JSON.stringify([9,8,7], [1,1]);
var mixed_arr = [11,12,13];
mixed_arr.x = 10;
JSON.stringify(mixed_arr, [1,0,1]);
var mixed_obj = { x: 3 };
mixed_obj[0] = 6;
mixed_obj[1] = 5;
JSON.stringify(mixed_obj, [1,0,1]);
const v145 = { x: 3, b: 4 };
JSON.stringify({ x: 1, y: 2, z: v145 }, ["z","x"]);
const v154 = { x: 1, 1: 1 };
JSON.stringify(v154, [{}]);
JSON.stringify({ x: 1, 1: 1 }, [true,,null]);
const v170 = { x: 1, 1: 1 };
function f171() {
    return "x";
}
JSON.stringify(v170, [{ toString: f171 }]);
const v179 = { x: 1, 1: 1 };
function f180() {
    return 1;
}
JSON.stringify(v179, [{ valueOf: f180 }]);
JSON.stringify({ toString: 42 }, ["toString"]);
const v194 = { 1: 1, s: "s" };
const v197 = new Number(1);
const v200 = new String("s");
JSON.stringify(v194, [v197,v200]);
