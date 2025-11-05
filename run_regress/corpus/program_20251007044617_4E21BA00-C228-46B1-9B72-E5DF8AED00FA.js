function f0() {
}
function f1() {
    const v4 = Math?.PI;
    let v10;
    try { v10 = Symbol(); } catch (e) {}
    return [0,v4,NaN,Infinity,true,false,v10,Math?.tan,Reflect,Proxy,f0,f0,Array,String,Boolean,Number,parseInt,parseFloat,Math?.sin,Math?.cos,Math?.abs,Math?.pow,Math?.sqrt,Uint8Array,Int8Array,Int32Array,Int16Array,Uint16Array];
}
try { oomTest(f1); } catch (e) {}
