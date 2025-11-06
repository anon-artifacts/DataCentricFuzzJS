const v28 = {
    has(a1, a2) {
        console.log("has " + a2);
        return !((a2 === "get") || (a2 === "set"));
    },
    get(a14, a15) {
        console.log("get " + a15);
        if ((a15 == "get") || (a15 == "set")) {
            const v25 = () => {
                return 1;
            };
            return v25;
        } else {
            return 1;
        }
    },
};
var proxyHandler = v28;
const v32 = new Proxy({}, proxyHandler);
var p = v32;
var o = {};
Object.defineProperty(o, "x", p);
console.log("======================");
var pp = {};
pp.__proto__ = p;
Object.defineProperty(o, "y", pp);
