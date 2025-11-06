function target() {
}
const v4 = {
    get() {
        target.prototype = 123;
    },
};
const v5 = new Proxy(target, v4);
var proxy = v5;
new proxy();
