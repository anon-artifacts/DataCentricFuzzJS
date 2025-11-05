class C0 {
    get prop_this() {
        return this;
    }
}
var g_prop_this = "prop_this";
class C4 extends C0 {
    super_prop() {
        return super.prop_this;
    }
    super_elem() {
        return super[g_prop_this];
    }
}
var barsym = Symbol("bar");
const v14 = new C4();
v14.super_prop.call(3);
const v19 = new C4();
v19.super_prop.call("foo");
const v24 = new C4();
v24.super_prop.call(true);
const v28 = new C4();
v28.super_prop.call(barsym);
const v32 = new C4();
v32.super_prop.call(null);
const v37 = new C4();
v37.super_prop.call(undefined);
const v42 = new C4();
v42.super_elem.call(3);
const v47 = new C4();
v47.super_elem.call("foo");
const v52 = new C4();
v52.super_elem.call(true);
const v56 = new C4();
v56.super_elem.call(barsym);
const v60 = new C4();
v60.super_elem.call(null);
const v65 = new C4();
v65.super_elem.call(undefined);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
