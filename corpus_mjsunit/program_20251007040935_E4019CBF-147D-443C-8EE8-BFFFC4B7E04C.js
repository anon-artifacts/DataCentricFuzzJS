var d = { x: undefined, y: undefined };
function Crash(a5, a6) {
    const v9 = a6.x - a5.x;
    const v12 = a6.y - a5.y;
    var c = { x: v9, y: v12 };
    return c.x * c.y;
}
var a = { x: 0.5, y: 0 };
var b = { x: 1, y: 0 };
for (let i27 = 0; i27 < 3; i27++) {
    Crash(a, b);
}
Crash(a, b);
Crash({ x: 0, y: 0.5 }, b);
