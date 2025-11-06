function Foo() {
}
function f1() {
    const v3 = WebAssembly.Module;
    try { new v3(); } catch (e) {}
}
f1();
function f6() {
    const v8 = WebAssembly.Module;
    try { new v8(0); } catch (e) {}
}
f6();
function f12() {
    const v14 = WebAssembly.Module;
    try { new v14("s"); } catch (e) {}
}
f12();
function f18() {
    const v20 = WebAssembly.Module;
    try { new v20(undefined); } catch (e) {}
}
f18();
function f24() {
    const v26 = WebAssembly.Module;
    try { new v26(1.1); } catch (e) {}
}
f24();
function f30() {
    const v32 = WebAssembly.Module;
    const v35 = 1 / 0;
    try { new v32(v35); } catch (e) {}
}
f30();
function f38() {
    const v40 = WebAssembly.Module;
    try { new v40(null); } catch (e) {}
}
f38();
function f44() {
    const v46 = WebAssembly.Module;
    const v47 = new Foo();
    try { new v46(v47); } catch (e) {}
}
f44();
function f50() {
    const v52 = WebAssembly.Module;
    const v55 = new ArrayBuffer(0);
    try { new v52(v55); } catch (e) {}
}
f50();
function f58() {
    const v60 = WebAssembly.Module;
    const v63 = new ArrayBuffer(7);
    try { new v60(v63); } catch (e) {}
}
f58();
