const v3 = new String("");
print("typeof (new String()) : " + typeof v3);
print("typeof () : " + typeof "");
const v16 = new Boolean(false);
print("typeof (new Boolean(false)) : " + typeof v16);
print("typeof (false) : " + typeof false);
const v28 = new Number(0);
print("typeof (new Number(0)) : " + typeof v28);
print("typeof (0) : " + typeof 0);
const v39 = new Number(12345.678);
print("typeof (new Number(12345.678)) : " + typeof v39);
print("typeof (12345.678) : " + typeof 12345.678);
function f() {
    function g() {
    }
    return g;
}
print("typeof function : " + typeof f);
print("typeof function returning function : " + typeof f());
function exc() {
    try {
        print(q);
    } catch(e62) {
        print("Caught JS error on undefined var");
        print(typeof q);
    }
}
exc();
var x = {};
print("typeof empty obj : " + typeof x);
const v77 = new Object();
print("typeof obj : " + typeof v77);
var y = [];
y[0] = 0;
print("typeof array element with number : " + typeof y[0]);
print("typeof undef element array : " + typeof y[1]);
print("typeof array : " + typeof y);
const v100 = new Error("aaa");
var verr = v100;
print("typeof (err) : " + typeof verr);
const v108 = new Date(123);
var vDate = v108;
print("typeof ( new Date) : " + typeof vDate);
const v116 = new Array();
print("typeof (new Array()) : " + typeof v116);
var regx = /abc/;
print("typeof(regex) : " + typeof regx);
var s;
var map = {};
function CEvent() {
    do {
    } while ((() => {
            const v131 = map.x;
            s = v131;
            return typeof v131 != "undefined";
        })())
}
CEvent();
