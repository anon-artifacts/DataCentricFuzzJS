console.log("Regression test for https://webkit.org/b/139229. This test should not crash.");
function InnerObjectNoGetter() {
    this._enabled = false;
}
const v8 = {
    set enabled(a7) {
        this._enabled = a7;
    },
};
InnerObjectNoGetter.prototype = v8;
function InnerObjectNoSetter() {
    this._enabled = false;
}
const v14 = {
    get enabled() {
        return this._enabled;
    },
};
InnerObjectNoSetter.prototype = v14;
function OuterObject(a16) {
    this._innerObject = a16;
}
const v24 = {
    get enabled() {
        return this._innerObject.enabled;
    },
    set enabled(a22) {
        const t0 = this._innerObject;
        t0.enabled = a22;
    },
};
OuterObject.prototype = v24;
var count = 0;
const v27 = new InnerObjectNoGetter();
var innerNoGetter = v27;
const v29 = new OuterObject(innerNoGetter);
var outerNoInnerGetter = v29;
for (let i32 = 0; i32 < 1000; ++i32) {
    if (outerNoInnerGetter.enabled) {
        ++count;
    }
}
const v40 = new InnerObjectNoSetter();
var innerNoSetter = v40;
const v42 = new OuterObject(innerNoSetter);
var outerNoInnerSetter = v42;
for (let i45 = 0; i45 < 1000; ++i45) {
    outerNoInnerSetter.enabled = true;
    if (outerNoInnerSetter.enabled) {
        ++count;
    }
}
if (count) {
    throw "Error: bad result: count should be 0 but was: " + count;
}
