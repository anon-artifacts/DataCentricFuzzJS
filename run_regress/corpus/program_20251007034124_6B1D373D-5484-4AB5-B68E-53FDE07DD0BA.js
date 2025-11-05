function set_x(a1) {
    x = a1;
}
var o = {};
set_x(o);
set_x(o);
Object.defineProperty(this, "x", { value: 5, writable: false, configurable: true });
set_x(o);
set_x(o);
Object.defineProperty(this, "x", { value: 42, writable: true, configurable: true });
set_x(o);
