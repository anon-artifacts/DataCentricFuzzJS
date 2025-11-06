function f0() {
    const v3 = new Array(10);
    var array = v3;
    array.unshift("1st", "2ns", "3rd");
    0 in array;
    1 in array;
    2 in array;
    3 in array;
}
f0();
function f19() {
    var len = 3;
    const v23 = new Array(len);
    var array = v23;
    var at0 = "@0";
    var at2 = "@2";
    const t16 = Array.prototype;
    t16[0] = at0;
    const t18 = Array.prototype;
    t18[2] = at2;
    array.hasOwnProperty(0);
    array.hasOwnProperty(1);
    array.hasOwnProperty(2);
    array[0];
    array[1];
    array[2];
    array.unshift();
    const t20 = Array.prototype;
    delete t20[0];
    const t28 = Array.prototype;
    delete t28[2];
    array.hasOwnProperty(0);
    array.hasOwnProperty(1);
    array.hasOwnProperty(2);
    array[0];
    array[1];
    array[2];
}
f19();
function f61() {
    var len = 9;
    const v65 = new Array(len);
    var array = v65;
    const t43 = Array.prototype;
    t43[3] = "@3";
    const t45 = Array.prototype;
    t45[7] = "@7";
    array.length;
    for (let i73 = 0; i73 < array.length; i73++) {
        array[i73];
        Array.prototype[i73];
    }
    len + 1;
    array.unshift("head");
    len + 1;
    array.length;
    array[4];
    Array.prototype[3];
    array.hasOwnProperty(4);
    array[8];
    Array.prototype[7];
    array.hasOwnProperty(8);
    const t52 = Array.prototype;
    t52[5] = "@5";
    array[5];
    Array.prototype[5];
    array.hasOwnProperty(5);
    array[3];
    Array.prototype[3];
    array.hasOwnProperty(3);
    array[7];
    Array.prototype[7];
    array.hasOwnProperty(7);
    const t64 = Array.prototype;
    delete t64[3];
    const t74 = Array.prototype;
    delete t74[5];
    const t76 = Array.prototype;
    delete t76[7];
}
f61();
function f126() {
    var len = 3;
    const v130 = new Array(len);
    var array = v130;
    var at0 = "@0";
    var at2 = "@2";
    var array_proto = [];
    array_proto[0] = at0;
    array_proto[2] = at2;
    array.__proto__ = array_proto;
    array.hasOwnProperty(0);
    array.hasOwnProperty(1);
    array.hasOwnProperty(2);
    array[0];
    array[1];
    array[2];
    array.unshift();
    array.hasOwnProperty(0);
    array.hasOwnProperty(1);
    array.hasOwnProperty(2);
    array[0];
    array[1];
    array[2];
}
f126();
function f160() {
    var len = 9;
    const v164 = new Array(len);
    var array = v164;
    var array_proto = [];
    array_proto[3] = "@3";
    array_proto[7] = "@7";
    array.__proto__ = array_proto;
    array.length;
    for (let i172 = 0; i172 < array.length; i172++) {
        array[i172];
        array_proto[i172];
    }
    len + 1;
    array.unshift("head");
    len + 1;
    array.length;
    array[4];
    array_proto[3];
    array.hasOwnProperty(4);
    array[8];
    array_proto[7];
    array.hasOwnProperty(8);
    array_proto[5] = "@5";
    array[5];
    array_proto[5];
    array.hasOwnProperty(5);
    array[3];
    array_proto[3];
    array.hasOwnProperty(3);
    array[7];
    array_proto[7];
    array.hasOwnProperty(7);
}
f160();
function f209() {
    for (let i211 = 0; i211 < 7; i211++) {
        try {
            const v221 = (2 ** 53) - 3;
            let obj = { length: v221 };
            Array.prototype.unshift.call(obj, 1, 2, 3, 4, 5);
            throw "Should have thrown TypeError";
        } catch(e234) {
            e234 instanceof TypeError;
        }
    }
}
f209();
function f238() {
    for (let i240 = 0; i240 < 7; i240++) {
        var a = [6,7,8,9];
        a.unshift(1, 2, 3, 4, 5);
        [1,2,3,4,5,6,7,8,9];
    }
}
f238();
function f269() {
    var array = [2,3];
    Object.defineProperty(array, "1", { enumerable: false });
    array.unshift(1);
    [1,2,3];
    array = [2];
    array.length = 2;
    const t169 = array.__proto__;
    t169[1] = 3;
    const v290 = array.__proto__;
    Object.defineProperty(v290, "1", { enumerable: false });
    array.unshift(1);
    [1,2,3];
}
f269();
