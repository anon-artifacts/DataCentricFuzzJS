var x = "wrong";
var t = { x: "x" };
var hits = 0;
const v21 = {
    has(a9, a10) {
        var found = a10 in a9;
        if (++hits == 2) {
            delete a9[a10];
        }
        return found;
    },
    get(a18, a19) {
        return a18[a19];
    },
};
const v22 = new Proxy(t, v21);
var p = v22;
with (p) {
    x += " x";
}
t.x;
