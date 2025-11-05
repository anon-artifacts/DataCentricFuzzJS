function f0() {
}
var BUGNUMBER = 304828;
var summary = "Array Generic Methods";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var value;
value = "123";
expect = "1,2,3";
try {
    actual = Array.prototype.join.call(value);
} catch(e19) {
    actual = e19 + "";
}
f0(expect, actual, summary + ": join");
value = "123";
expect = "TypeError: 0 is read-only";
try {
    actual = Array.prototype.reverse.call(value) + "";
} catch(e33) {
    actual = e33 + "";
}
f0(expect, actual, summary + ": reverse");
value = "cba";
expect = "TypeError: 0 is read-only";
try {
    actual = Array.prototype.sort.call(value) + "";
} catch(e47) {
    actual = e47 + "";
}
f0(expect, actual, summary + ": sort");
value = "abc";
expect = 6;
try {
    Array.prototype.push.call(value, "d", "e", "f");
    const v64 = new Error("didn't throw");
    throw v64;
} catch(e65) {
    f0(true, e65 instanceof TypeError, "push on a string primitive should throw TypeError");
}
f0("abc", value, summary + ": push string primitive");
const v77 = new String("abc");
value = v77;
expect = 6;
try {
    Array.prototype.push.call(value, "d", "e", "f");
    const v88 = new Error("didn't throw");
    throw v88;
} catch(e89) {
    f0(true, e89 instanceof TypeError, "push on a String object should throw TypeError");
}
f0("d", value[3], summary + ": push String object index 3");
f0("e", value[4], summary + ": push String object index 4");
f0("f", value[5], summary + ": push String object index 5");
value = "abc";
expect = "TypeError: property 2 is non-configurable and can't be deleted";
try {
    actual = Array.prototype.pop.call(value);
} catch(e116) {
    actual = e116 + "";
}
f0(expect, actual, summary + ": pop");
f0("abc", value, summary + ": pop");
value = "def";
expect = "TypeError: 0 is read-only";
try {
    actual = Array.prototype.unshift.call(value, "a", "b", "c");
} catch(e135) {
    actual = e135 + "";
}
f0(expect, actual, summary + ": unshift");
f0("def", value, summary + ": unshift");
value = "abc";
expect = "TypeError: 0 is read-only";
try {
    actual = Array.prototype.shift.call(value);
} catch(e151) {
    actual = e151 + "";
}
f0(expect, actual, summary + ": shift");
f0("abc", value, summary + ": shift");
value = "abc";
expect = "TypeError: 1 is read-only";
try {
    actual = Array.prototype.splice.call(value, 1, 1) + "";
} catch(e171) {
    actual = e171 + "";
}
f0(expect, actual, summary + ": splice");
value = "abc";
expect = "abc,d,e,f";
try {
    actual = Array.prototype.concat.call(value, "d", "e", "f") + "";
} catch(e188) {
    actual = e188 + "";
}
f0(expect, actual, summary + ": concat");
value = "abc";
expect = "b";
try {
    actual = Array.prototype.slice.call(value, 1, 2) + "";
} catch(e204) {
    actual = e204 + "";
}
f0(expect, actual, summary + ": slice");
value = "abc";
expect = 1;
try {
    actual = Array.prototype.indexOf.call(value, "b");
} catch(e217) {
    actual = e217 + "";
}
f0(expect, actual, summary + ": indexOf");
value = "abcabc";
expect = 4;
try {
    actual = Array.prototype.lastIndexOf.call(value, "b");
} catch(e230) {
    actual = e230 + "";
}
f0(expect, actual, summary + ": lastIndexOf");
value = "abc";
expect = "ABC";
actual = "";
try {
    function f239(a240, a241, a242) {
        actual += a242[a241].toUpperCase();
    }
    Array.prototype.forEach.call(value, f239);
} catch(e249) {
    actual = e249 + "";
}
f0(expect, actual, summary + ": forEach");
value = "abc";
expect = "A,B,C";
try {
    function f257(a258, a259, a260) {
        return a258.toUpperCase();
    }
    actual = Array.prototype.map.call(value, f257) + "";
} catch(e268) {
    actual = e268 + "";
}
f0(expect, actual, summary + ": map");
value = "1234567890";
expect = "2,4,6,8,0";
try {
    function f276(a277, a278, a279) {
        return (a279[a278] % 2) == 0;
    }
    actual = Array.prototype.filter.call(value, f276) + "";
} catch(e291) {
    actual = e291 + "";
}
f0(expect, actual, summary + ": filter");
value = "1234567890";
expect = false;
try {
    function f299(a300, a301, a302) {
        return (a302[a301] % 2) == 0;
    }
    actual = Array.prototype.every.call(value, f299);
} catch(e312) {
    actual = e312 + "";
}
f0(expect, actual, summary + ": every");
