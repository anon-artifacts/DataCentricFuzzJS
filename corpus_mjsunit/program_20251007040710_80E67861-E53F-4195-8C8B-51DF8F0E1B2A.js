function* g(a1) {
    for (let i3 = 0; i3 < a1; i3++) {
        yield i3;
    }
}
var GeneratorObjectPrototype = Object.getPrototypeOf(g).prototype;
var GeneratorObjectPrototype_next = GeneratorObjectPrototype.next;
var inner = g(20);
var n = 0;
for (const v20 of inner) {
    n++;
    if (n == 1) {
        function f24() {
            throw "not reached";
        }
        inner.next = f24;
    }
}
var inner = g(20);
var n = 0;
for (const v32 of inner) {
    n++;
    if (n == 1) {
        function f36() {
            throw "not reached";
        }
        GeneratorObjectPrototype.next = f36;
    }
}
