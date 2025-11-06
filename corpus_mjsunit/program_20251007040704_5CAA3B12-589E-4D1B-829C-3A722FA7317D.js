const v4 = {
    get prop() {
        return 2;
    },
    set prop(a3) {
    },
};
var x = v4;
var y = { __proto__: x, prop: 1 };
y.__lookupGetter__("prop");
y.__lookupSetter__("prop");
