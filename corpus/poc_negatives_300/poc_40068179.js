function opt(opt_param){
const t52 = "undefined";
let v1 = delete t52.length;
try {
    const v2 = [0.5345328425681423,-871.8233695234496,2.623970852598832e+307,-2.0];
    for (let v3 = 0; v3 < 5; v3++) {
        Object.defineProperty(v2, "length", { writable: true, configurable: true, value: v2 });
        v1++;
        v1--;
    }
} catch(e6) {
    Math.round(v1);
} finally {
}
const v9 = [65536,-4096,-128,-36659];
return v9;
}

opt(false);
%PrepareFunctionForOptimization(opt);
opt(true);
%OptimizeFunctionOnNextCall(opt);
opt(false);
// d8 --allow-natives-syntax --future --always-turbofan --no-turbo-loop-peeling ./poc.js