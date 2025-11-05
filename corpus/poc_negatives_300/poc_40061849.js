
const obj7 = -1;
function foo(arg) {
    let obj10 = 0;
    let obj11 = 0;
    for(var i= 0 ;i<0x10;i++){
        const obj13 = arg.length;
        const obj14 = obj11 < obj13;

        if (obj14) {
            const obj15 = arg[obj11];
            const obj17 = obj11 + 1;
            const obj18 = arg[obj17];
            const obj19 = obj15 + obj18;
            const obj20 = obj10 / obj19;
            obj10 = obj20;
            let obj21 = 0;
            do {
                try {
                    const obj23 = !obj7;

                } catch(e) {
                }
                obj21++;
            } while (obj21 < 7);
        } else {
            break;
        }

        const obj27 = obj11 + 2;
        obj11 = obj27;
    }

}
const obj32 = [1,2,3,4];


%PrepareFunctionForOptimization(foo);
foo(obj32);foo(obj32);foo(obj32);
console.log("maglev");
%OptimizeMaglevOnNextCall(foo);
foo(obj32);

// Stderr:
// #
// # Fatal error in ../../src/objects/map-inl.h, line 332
// # Debug check failed: IsPrimitiveMap().
// #
// #
// #
// #FailureMessage Object: 0x7ffe3686c530Received signal 6
// ==== C stack trace ===============================
//  [0x55a01d68b15e]
//  [0x7f677035d3c0]
//  [0x7f677002718b]
//  [0x7f6770006859]
//  [0x55a01d685eea]
//  [0x55a01d67ca02]
//  [0x55a01d67c3a5]
//  [0x55a01e438590]
//  [0x55a01e4b11d2]
//  [0x55a01e41bc66]
//  [0x55a01e41a34f]
//  [0x55a01d71d12b]
//  [0x55a01dc01865]
//  [0x55a01e4a921b]
//  [0x55a01e2f99df]
//  [0x55a01e49e434]
//  [0x55a01e77067f]
//  [0x55a01e770051]
//  [0x559f9fead0f8]
// [end of stack trace]
// flag:--allow-natives-syntax --maglev