const v4 = {
    0: 0,
    1: 1,
    get length() {
        return 2;
    },
};
var obj = v4;
const v8 = Array.prototype.pop;
try { v8.call(obj); } catch (e) {}
const v12 = Array.prototype.push;
try { v12.call(obj, 2); } catch (e) {}
const v15 = Array.prototype.shift;
try { v15.call(obj); } catch (e) {}
const v19 = Array.prototype.unshift;
try { v19.call(obj, 2); } catch (e) {}
const v24 = Array.prototype.splice;
try { v24.call(obj, 0, 1); } catch (e) {}
const v30 = {
    0: 0,
    1: 1,
    get length() {
        return 0;
    },
};
var obj = v30;
const v33 = Array.prototype.pop;
try { v33.call(obj); } catch (e) {}
const v37 = Array.prototype.push;
try { v37.call(obj, 2); } catch (e) {}
const v40 = Array.prototype.shift;
try { v40.call(obj); } catch (e) {}
const v44 = Array.prototype.unshift;
try { v44.call(obj, 2); } catch (e) {}
const v49 = Array.prototype.splice;
try { v49.call(obj, 0, 1); } catch (e) {}
var obj = { 0: 0, 1: 1 };
Object.defineProperty(obj, "length", { value: 2, writable: false, configurable: false });
const v63 = Array.prototype.pop;
try { v63.call(obj); } catch (e) {}
const v67 = Array.prototype.push;
try { v67.call(obj, 2); } catch (e) {}
const v70 = Array.prototype.shift;
try { v70.call(obj); } catch (e) {}
const v74 = Array.prototype.unshift;
try { v74.call(obj, 2); } catch (e) {}
const v79 = Array.prototype.splice;
try { v79.call(obj, 0, 1); } catch (e) {}
var proto = {};
const v87 = -109;
const v89 = {
    0: 1,
    1: 1,
    2: 1,
    3: v87,
    length: 4,
};
var obj = v89;
obj.__proto__ = proto;
function f93() {
    return 31;
}
Object.defineProperty(proto, "4", { configurable: true, get: f93 });
const v101 = Array.prototype.unshift;
try { v101.call(obj, 200, 201, 202); } catch (e) {}
const v105 = Array.prototype.push;
try { v105.call(obj, 200); } catch (e) {}
