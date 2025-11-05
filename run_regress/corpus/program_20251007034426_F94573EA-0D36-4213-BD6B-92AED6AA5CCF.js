function FirstBuffer() {
}
const v2 = Uint8Array?.prototype;
const t3 = FirstBuffer?.prototype;
t3.__proto__ = v2;
FirstBuffer.__proto__ = Uint8Array;
let v5;
try { v5 = new Uint8Array(10); } catch (e) {}
var buf = v5;
buf.__proto__ = FirstBuffer?.prototype;
const v8 = () => {
    let v10;
    try { v10 = buf.subarray(2); } catch (e) {}
    return v10;
};
try { v8(); } catch (e) {}
let seen_args = [];
function SecondBuffer(a16) {
    try { seen_args.push(a16); } catch (e) {}
    let v18;
    try { v18 = new Uint8Array(a16); } catch (e) {}
    var arr = v18;
    arr.__proto__ = SecondBuffer?.prototype;
    return arr;
}
const v21 = Uint8Array?.prototype;
const t26 = SecondBuffer?.prototype;
t26.__proto__ = v21;
SecondBuffer.__proto__ = Uint8Array;
let v24;
try { v24 = new SecondBuffer(10); } catch (e) {}
var buf3 = v24;
[10];
let v29;
try { v29 = buf3.subarray(2); } catch (e) {}
var buf4 = v29;
buf4?.length;
[10,buf3?.buffer];
