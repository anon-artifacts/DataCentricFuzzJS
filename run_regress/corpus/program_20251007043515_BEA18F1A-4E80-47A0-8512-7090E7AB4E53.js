var hits = 0;
var limit = 10;
const v5 = {};
const v15 = {
    get(a7, a8, a9) {
        if (hits++ >= limit) {
            return "ding";
        }
        return obj[a8];
    },
};
const v16 = new Proxy(v5, v15);
var proto = v16;
var obj = Object.create(proto);
obj.prop;
hits = 0;
limit = Infinity;
hits > 10;
