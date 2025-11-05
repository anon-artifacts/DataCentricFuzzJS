var proxy_has_x = false;
const v3 = {};
const v10 = {
    get(a5, a6, a7) {
        'x';
        if (proxy_has_x) {
            return 19;
        }
        return 8;
    },
};
const v11 = new Proxy(v3, v10);
var proxy = v11;
Object.prototype.__lookupGetter__.call(proxy, "foo");
Object.prototype.__lookupSetter__.call(proxy, "bar");
Object.prototype.__lookupGetter__.call(proxy, "123");
Object.prototype.__lookupSetter__.call(proxy, "456");
var object = Object.create(proxy);
Object.prototype.__lookupGetter__.call(object, "foo");
Object.prototype.__lookupSetter__.call(object, "bar");
Object.prototype.__lookupGetter__.call(object, "123");
Object.prototype.__lookupSetter__.call(object, "456");
function F() {
    this.x = 42;
}
F.prototype = proxy;
const v59 = new F();
var instance = v59;
proxy_has_x = false;
instance.x;
delete instance.x;
instance.x;
proxy_has_x = true;
instance.x;
function G() {
    this.x = 42;
}
const t37 = G.prototype;
t37.__proto__ = proxy;
const v74 = new G();
instance = v74;
proxy_has_x = false;
instance.x;
delete instance.x;
instance.x;
proxy_has_x = true;
instance.x;
