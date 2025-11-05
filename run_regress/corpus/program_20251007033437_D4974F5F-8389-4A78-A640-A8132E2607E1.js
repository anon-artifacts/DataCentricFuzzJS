let get = [];
let getSet = [];
function resetTracking() {
    get = [];
    getSet = [];
}
function f8() {
    return null;
}
const v10 = { exec: f8 };
function f11(a12, a13) {
    get.push(a13);
    return a12[a13];
}
const v17 = new Proxy(v10, { get: f11 });
let getProxyNullExec = v17;
resetTracking();
RegExp.prototype[Symbol.replace].call(getProxyNullExec);
get == "global,exec";
function f28() {
    return null;
}
const v30 = { exec: f28 };
function f31(a32, a33) {
    get.push(a33);
    getSet.push(a33);
    return a32[a33];
}
function f37(a38, a39, a40) {
    getSet.push(a39);
    a38[a39] = a40;
}
const v43 = new Proxy(v30, { get: f31, set: f37 });
let getSetProxyNullExec = v43;
getSetProxyNullExec.global = true;
resetTracking();
RegExp.prototype[Symbol.replace].call(getSetProxyNullExec);
get == "global,unicode,exec";
getSet == "global,unicode,lastIndex,exec";
const v57 = new RegExp(",", "g");
let regExpGlobal_comma = v57;
function f59(a60) {
    return regExpGlobal_comma.exec(a60);
}
const v62 = { exec: f59 };
function f63(a64, a65) {
    get.push(a65);
    getSet.push(a65);
    return a64[a65];
}
function f69(a70, a71, a72) {
    getSet.push(a71);
    a70[a71] = a72;
}
const v75 = new Proxy(v62, { get: f63, set: f69 });
let getSetProxyMatches_comma = v75;
getSetProxyMatches_comma.global = true;
resetTracking();
let replaceResult = RegExp.prototype[Symbol.replace].call(getSetProxyMatches_comma, "John,,Doe,121 Main St.,Anytown", ":");
replaceResult == "John::Doe:121 Main St.:Anytown";
get == "global,unicode,exec,exec,exec,exec,exec";
getSet == "global,unicode,lastIndex,exec,exec,exec,exec,exec";
const v94 = new RegExp("(\d{3})(\d{3})(\d{4})", "");
let regExp_phoneNumber = v94;
function f96(a97) {
    return regExp_phoneNumber.exec(a97);
}
const v99 = { exec: f96 };
function f100(a101, a102) {
    get.push(a102);
    getSet.push(a102);
    if (a102.toString() == "lastIndex") {
        return regExpGlobal_phoneNumber.lastIndex;
    }
    return a101[a102];
}
function f111(a112, a113, a114) {
    getSet.push(a113);
    if (a113.toString() == "lastIndex") {
        regExp_phoneNumber.lastIndex = a114;
    }
    a112[a113] = a114;
}
const v120 = new Proxy(v99, { get: f100, set: f111 });
let getSetProxyReplace_phoneNumber = v120;
resetTracking();
replaceResult = RegExp.prototype[Symbol.replace].call(getSetProxyReplace_phoneNumber, "8005551212", "$1-$2-$3");
replaceResult == "800-555-1212";
get == "global,exec";
getSet == "global,exec";
const v137 = new RegExp("\d{0,1}", "gu");
let regExpGlobalUnicode_digit_nonGreedy = v137;
function f139(a140) {
    return regExpGlobalUnicode_digit_nonGreedy.exec(a140);
}
const v142 = { exec: f139 };
function f143(a144, a145) {
    get.push(a145);
    getSet.push(a145);
    if (a145.toString() == "lastIndex") {
        return regExpGlobalUnicode_digit_nonGreedy.lastIndex;
    }
    return a144[a145];
}
function f153(a154, a155, a156) {
    getSet.push(a155);
    if (a155.toString() == "lastIndex") {
        regExpGlobalUnicode_digit_nonGreedy.lastIndex = a156;
    }
    a154[a155] = a156;
}
const v162 = new Proxy(v142, { get: f143, set: f153 });
let getSetProxyReplaceUnicode_digit_nonGreedy = v162;
getSetProxyReplaceUnicode_digit_nonGreedy.global = true;
getSetProxyReplaceUnicode_digit_nonGreedy.unicode = true;
resetTracking();
replaceResult = RegExp.prototype[Symbol.replace].call(getSetProxyReplaceUnicode_digit_nonGreedy, "12X3𐐀4", "[$&]");
replaceResult == "[1][2][]X[3][]𐐀[4][]";
get == "global,unicode,exec,exec,exec,lastIndex,exec,exec,lastIndex,exec,exec,lastIndex,exec";
getSet == "global,unicode,lastIndex,exec,exec,exec,lastIndex,lastIndex,exec,exec,lastIndex,lastIndex,exec,exec,lastIndex,lastIndex,exec";
