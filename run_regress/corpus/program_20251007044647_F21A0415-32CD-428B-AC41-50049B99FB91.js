const v9 = {
    get prop() {
        a + b;
    },
    set prop(a5) {
        a + b;
    },
};
var o = v9;
var prop = Object.getOwnPropertyDescriptor(o, "prop");
prop.get.toString();
const v18 = prop.get;
try { v18.toSource(); } catch (e) {}
prop.set.toString();
const v24 = prop.set;
try { v24.toSource(); } catch (e) {}
try { o.toSource(); } catch (e) {}
