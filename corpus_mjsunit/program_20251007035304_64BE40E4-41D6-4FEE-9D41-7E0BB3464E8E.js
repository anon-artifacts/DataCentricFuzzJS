function t1() {
    for (const v9 of [Array.prototype.forEach,Array.prototype.filter,Array.prototype.flatMap]) {
        try {
            console.log((typeof v9.name === "string") && (v9.name.length > 0));
        } catch(e21) {
        }
        try {
            const v25 = [1,2,3];
            function callback() {
                const v29 = new Error("error in callback");
                throw v29;
            }
            v9.call(v25, callback);
            console.log(false, `Exception swallowed from callback for ${v9.name}`);
        } catch(e36) {
            const frames = e36.stack.split("\n");
            const v41 = frames[0];
            console.log(/error in callback/.test(v41));
            const v46 = frames[1];
            console.log(/at callback \(/.test(v46));
            const v50 = frames[3];
            console.log(/at body \(/.test(v50));
        }
    }
}
t1();
function t2() {
    for (const v76 of [Array.prototype.values,Array.prototype.entries,Array.prototype.keys,Array.prototype.indexOf,Array.prototype.forEach,Array.prototype.filter,Array.prototype.flat,Array.prototype.flatMap,Object.fromEntries]) {
        try {
            console.log((typeof v76.name === "string") && (v76.name.length > 0), `Test requires builtin.name to be set for ${v76.toString()}`);
        } catch(e90) {
        }
        try {
            new v76();
        } catch(e92) {
        }
        try {
            Reflect.construct(v76, []);
        } catch(e96) {
        }
        try {
            function f97() {
            }
            Reflect.construct(f97, [], v76);
        } catch(e101) {
        }
    }
}
t2();
