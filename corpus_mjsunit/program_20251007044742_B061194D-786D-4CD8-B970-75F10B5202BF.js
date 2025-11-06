var o = { y: 0 };
function f4() {
    o.y;
}
Object.defineProperty(o, "x", { get: f4 });
for (let i10 = 0; i10 < 10; i10++) {
    var fail = false;
    try {
        o.x.u;
        fail = true;
    } catch(e21) {
    }
    delete o.y;
}
