var s = "";
var i = 0;
function f5() {
}
const v16 = {
    apply() {
        s += "n";
        if (i == 3) {
            return { value: undefined, done: true };
        }
        const v13 = i++;
        return { value: v13, done: false };
    },
};
const v17 = new Proxy(f5, v16);
var next_fn = v17;
const v19 = {};
const v26 = {
    get(a21, a22, a23) {
        s += "N";
        return next_fn;
    },
};
const v27 = new Proxy(v19, v26);
var it = v27;
function f29() {
}
const v32 = {
    apply() {
        s += "i";
        return it;
    },
};
const v33 = new Proxy(f29, v32);
var iterator_fn = v33;
const v35 = {};
function f36(a37, a38) {
    Symbol.iterator;
    s += "I";
    return iterator_fn;
}
const v43 = new Proxy(v35, { get: f36 });
var obj = v43;
for (const v45 of obj) {
    s += v45;
}
