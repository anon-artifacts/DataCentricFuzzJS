var attrs = ["configurable","enumerable","writable","value","get","set"];
function test(a9, a10, a11, a12) {
    var log = "";
    const v41 = {
        getOwnPropertyDescriptor(a17, a18) {
            log += "g";
            return a11;
        },
        defineProperty(a21, a22, a23) {
            for (const v24 of attrs) {
                const v27 = -1;
                const v28 = [a9,a10,a11];
                let v30;
                try { v30 = uneval(v28); } catch (e) {}
                let v31;
                try { v31 = v30.slice(1, v27); } catch (e) {}
                var args = v31;
                v24 in a23;
                v24 in a12;
                `test(${args}), checking existence of desc.${v24}`;
                a23?.[a23];
                a12?.[a12];
                `test(${args}), checking value of desc.${v24}`;
            }
            log += "d";
            return true;
        },
    };
    const v42 = new Proxy(a9, v41);
    var p = v42;
    p[a10] = "pizza";
}
var fullDesc = { configurable: true, enumerable: true, writable: true, value: "pizza" };
var valueOnlyDesc = { value: "pizza" };
var sealedDesc = { configurable: false, enumerable: true, writable: true, value: "pizza" };
const v61 = {};
try { test(v61, "x", undefined, fullDesc); } catch (e) {}
const v65 = {};
try { test(v65, "x", fullDesc, valueOnlyDesc); } catch (e) {}
const v69 = { x: 1 };
try { test(v69, "x", undefined, fullDesc); } catch (e) {}
const v74 = { x: 1 };
try { test(v74, "x", fullDesc, valueOnlyDesc); } catch (e) {}
const v80 = Object.seal({ x: 1 });
try { test(v80, "x", sealedDesc, valueOnlyDesc); } catch (e) {}
const v85 = Object.create({ x: 1 });
try { test(v85, "x", undefined, fullDesc); } catch (e) {}
const v92 = [0,1,2];
try { test(v92, "2", undefined, fullDesc); } catch (e) {}
const v99 = [0,1,2];
try { test(v99, "2", fullDesc, valueOnlyDesc); } catch (e) {}
const v105 = [0,1,2];
try { test(v105, "3", undefined, fullDesc); } catch (e) {}
const v112 = [0,1,2];
try { test(v112, "3", fullDesc, valueOnlyDesc); } catch (e) {}
