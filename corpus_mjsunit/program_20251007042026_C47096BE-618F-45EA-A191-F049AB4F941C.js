global = "n";
function f(a3) {
    let it = global[Symbol.iterator]();
    if (a3) {
        return it.next().value;
    }
}
f();
f();
f(true);
