const v0 = () => {
};
let get = v0;
const v2 = () => {
};
let set = v2;
let target = {};
const v26 = {
    getOwnPropertyDescriptor(a7, a8) {
        let configurable = true;
        if (a8 == "both") {
            return { get: get, set: set, configurable: configurable };
        } else {
            if (a8 == "get") {
                return { get: get, configurable: configurable };
            } else {
                if (a8 == "set") {
                    return { set: set, configurable: configurable };
                } else {
                    if (a8 == "data") {
                        return { value: 42, configurable: configurable };
                    } else {
                        return Reflect.getOwnPropertyDescriptor(a7, a8);
                    }
                }
            }
        }
    },
};
let handler = v26;
const v29 = new Proxy(target, handler);
let proxy = v29;
proxy.__lookupGetter__("both");
proxy.__lookupGetter__("get");
proxy.__lookupGetter__("set");
proxy.__lookupGetter__("data");
proxy.__lookupSetter__("both");
proxy.__lookupSetter__("get");
proxy.__lookupSetter__("set");
proxy.__lookupSetter__("data");
let object = { __proto__: proxy };
object.__lookupGetter__("both");
object.__lookupGetter__("get");
object.__lookupGetter__("set");
object.__lookupGetter__("data");
object.__lookupSetter__("both");
object.__lookupSetter__("get");
object.__lookupSetter__("set");
object.__lookupSetter__("data");
const v77 = {
    __proto__: proxy,
    both: 1,
    get: 2,
    set: 3,
    data: 4,
};
let shadower = v77;
shadower.__lookupGetter__("both");
shadower.__lookupGetter__("get");
shadower.__lookupGetter__("set");
shadower.__lookupGetter__("data");
shadower.__lookupSetter__("both");
shadower.__lookupSetter__("get");
shadower.__lookupSetter__("set");
shadower.__lookupSetter__("data");
const v103 = () => {
};
let getFoo = v103;
const v105 = () => {
};
let setFoo = v105;
let proto = {};
Reflect.defineProperty(proto, "foo", { get: getFoo, set: setFoo });
Reflect.setPrototypeOf(target, proto);
proxy.__lookupGetter__("foo");
proxy.__lookupSetter__("foo");
const v118 = () => {
    return null;
};
handler.getPrototypeOf = v118;
proxy.__lookupGetter__("foo");
proxy.__lookupSetter__("foo");
const v126 = () => {
    return proto;
};
handler.getPrototypeOf = v126;
proxy.__lookupGetter__("foo");
proxy.__lookupSetter__("foo");
Reflect.defineProperty(proto, "data", { get: getFoo, set: setFoo });
proxy.__lookupGetter__("data");
proxy.__lookupSetter__("data");
