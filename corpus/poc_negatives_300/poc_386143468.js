let use = 0;
let v = 0;

function* opt_me(flag, a1) {
    // triggering Maglev OSR optimization
    if(flag)
        %OptimizeOsr();
    for (let j = 0; j < 1; j++) {
        ;
    }

    for (let k = 0; k < 1; k++) {
        const tmp = a1 || 1;
        // Triggers type conversion node of a1: OddBallOrHeapNumber=>Float64=>Int32
        // Passed to 'use' to avoid being optimized away
        use = tmp % 4;  
        v = tmp;
        // Generates SuspendGenerator instruction
        yield 1;
    }
}

%PrepareFunctionForOptimization(opt_me);
opt_me(false, 123).next();
print(v);
opt_me(false, 123).next();
print(v);

// Maglev OSR optimization
opt_me(true, 123).next();
print(v);

//./d8 --allow-natives-syntax --no-concurrent-recompilation ./poc.js