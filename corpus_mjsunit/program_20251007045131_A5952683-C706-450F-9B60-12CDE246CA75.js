x = [];
Array.prototype.push.call(x, Uint8ClampedArray);
function f8() {
    x.length = 9;
}
f8();
Array.prototype.reverse.call(x);
