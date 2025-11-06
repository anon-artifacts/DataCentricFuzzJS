console.assert(true);
console.assert("yes");
const v5 = () => {
    let v7;
    try { v7 = console.assert(false); } catch (e) {}
    return v7;
};
v5();
const v10 = () => {
    let v12;
    try { v12 = console.assert(""); } catch (e) {}
    return v12;
};
v10();
const v14 = () => {
    let v16;
    try { v16 = console.assert(0); } catch (e) {}
    return v16;
};
v14();
let args = ["",{},[],this,Array,1,1.4,true,false];
try { console.log(...args); } catch (e) {}
try { console.error(...args); } catch (e) {}
try { console.warn(...args); } catch (e) {}
try { console.info(...args); } catch (e) {}
try { console.debug(...args); } catch (e) {}
console.time();
console.timeEnd();
console.time("a");
console.timeEnd("a");
console.timeStamp();
const v41 = (a42) => {
    return console.timeStamp(a42);
};
args.forEach(v41);
console.trace();
