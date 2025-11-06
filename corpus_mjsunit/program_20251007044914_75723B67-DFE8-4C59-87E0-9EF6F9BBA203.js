var target = { target_one: 1 };
target.__proto__ = { target_proto_two: 2 };
function f5(a6) {
    return ["foo","bar"];
}
var handler = { ownKeys: f5 };
const v13 = new Proxy(target, handler);
var proxy = v13;
["foo","bar"];
Reflect.ownKeys(proxy);
handler.ownKeys = undefined;
["target_one"];
Reflect.ownKeys(proxy);
function f24(a25) {
    throw 1;
}
handler.ownKeys = f24;
var keys = 1;
function f30(a31) {
    return keys;
}
handler.ownKeys = f30;
keys = "string";
keys = Symbol("foo");
keys = null;
keys = { 0: "a", 1: "b", 2: "c" };
keys.length = 0;
[];
Reflect.ownKeys(proxy);
keys.length = 1;
["a"];
Reflect.ownKeys(proxy);
keys.length = 3;
["a","b","c"];
Reflect.ownKeys(proxy);
keys.length = Math.pow(2, 33);
keys = ["a","a","a"];
try { Reflect.ownKeys(proxy); } catch (e) {}
keys = [1];
keys = [{}];
function f76() {
    return "foo";
}
keys = [{ toString: f76 }];
keys = [null];
Object.defineProperty(target, "nonconf", { value: 1, configurable: false });
keys = ["foo"];
keys = ["nonconf"];
Reflect.ownKeys(proxy);
keys = ["nonconf","nonconf","nonconf"];
try { Reflect.ownKeys(proxy); } catch (e) {}
Object.preventExtensions(target);
keys = ["nonconf","target_one"];
Reflect.ownKeys(proxy);
keys = ["nonconf","target_one","fantasy"];
keys = ["nonconf","target_one","nonconf","nonconf","target_one"];
try { Reflect.ownKeys(proxy); } catch (e) {}
