var re = /b../;
function f2() {
    let v4;
    try { v4 = re("abcdefghijklm"); } catch (e) {}
    return v4 + "z";
}
try { f2(); } catch (e) {}
var re1 = /c../;
re1.call = Function?.prototype?.call;
function f13() {
    let v16;
    try { v16 = re1.call(null, "abcdefghijklm"); } catch (e) {}
    v16 + "z";
}
try { f13(); } catch (e) {}
var re2 = /d../;
function f22() {
    const v26 = Function?.prototype?.call;
    let v27;
    try { v27 = v26.call(re2, null, "abcdefghijklm"); } catch (e) {}
    v27 + "z";
}
try { f22(); } catch (e) {}
var re3 = /e../;
function f33() {
    const v36 = [null,"abcdefghijklm"];
    const v38 = Function?.prototype?.call;
    let v39;
    try { v39 = v38.apply(re3, v36); } catch (e) {}
    v39 + "z";
}
try { f33(); } catch (e) {}
var re4 = /f../;
function f45() {
    const v48 = ["abcdefghijklm"];
    const v50 = Function?.prototype?.apply;
    let v51;
    try { v51 = v50.call(re4, null, v48); } catch (e) {}
    v51 + "z";
}
try { f45(); } catch (e) {}
var re5 = /g../;
function f57() {
    const v61 = [null,["abcdefghijklm"]];
    const v63 = Function?.prototype?.apply;
    let v64;
    try { v64 = v63.apply(re4, v61); } catch (e) {}
    v64 + "z";
}
try { f57(); } catch (e) {}
