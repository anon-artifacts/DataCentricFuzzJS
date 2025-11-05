v0 = new Proxy([], {
    defineProperty() {
        v7.length = 1;
        gc();
        return Object.defineProperty.apply(this, arguments);
    }
});
class c0 extends Array {
    static get [Symbol.species]() {
        return function () {
            return v0;
        };
    }
}
v7 = new c0(65535);
v7 = new c0(65535);
v7[1] = 0.1;
Array.prototype[2] = 'two';
v16 = Array.prototype.concat.call(v7);
v16 = Array.prototype.concat.call(v7);
gc();
'foo'.match(new RegExp('foo'));
gc();