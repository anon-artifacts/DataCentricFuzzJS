var obj = { x: 1 };
const v10 = {
    set(a5, a6, a7, a8) {
        return false;
    },
};
const v11 = new Proxy(obj, v10);
var p = v11;
p.x = 2;
obj.x;
const v17 = () => {
    'use strict';
    p.x = 2;
};
try { v17(); } catch (e) {}
obj.x;
const v23 = () => {
    'use strict';
    p.x = 1;
};
try { v23(); } catch (e) {}
obj.x;
const v28 = () => {
    'use strict';
    p.z = 1;
};
try { v28(); } catch (e) {}
"z" in obj;
var arr = ["not","already","in","order"];
const v46 = {
    set(a41, a42, a43, a44) {
        return false;
    },
};
const v47 = new Proxy(arr, v46);
var p2 = v47;
const v49 = () => {
    let v50;
    try { v50 = p2.sort(); } catch (e) {}
    return v50;
};
v49();
["not","already","in","order"];
