function install(a1, a2) {
}
function f4() {
    return this;
}
install("return_this", f4);
function f8() {
    'use strict';
    return this;
}
install("return_this_strict", f8);
with ("irrelevant") {
}
with (this) {
}
function f14() {
    return this?.name;
}
install("f", f14);
function f19() {
    'use strict';
    return this ? this?.name : "u";
}
install("g", f19);
function f26() {
    'use strict';
    let v29;
    try { v29 = g(); } catch (e) {}
    return v29;
}
function f30() {
    'use strict';
    let v32;
    try { v32 = g(); } catch (e) {}
    return v32;
}
function f33() {
    let v36;
    try { v36 = g(); } catch (e) {}
    return v36;
}
function f37() {
    let v39;
    try { v39 = g(); } catch (e) {}
    return v39;
}
function f40() {
    'use strict';
    let v43;
    try { v43 = f(); } catch (e) {}
    return v43;
}
function f44() {
    'use strict';
    let v46;
    try { v46 = f(); } catch (e) {}
    return v46;
}
function f47() {
    let v50;
    try { v50 = f(); } catch (e) {}
    return v50;
}
function f51() {
    let v53;
    try { v53 = f(); } catch (e) {}
    return v53;
}
let v54;
try { v54 = f51(); } catch (e) {}
let v55;
try { v55 = v54(f47); } catch (e) {}
let v56;
try { v56 = v55(); } catch (e) {}
let v57;
try { v57 = v56(f44); } catch (e) {}
let v58;
try { v58 = v57(); } catch (e) {}
let v59;
try { v59 = v58(f40); } catch (e) {}
let v60;
try { v60 = v59(); } catch (e) {}
let v61;
try { v61 = v60(f37); } catch (e) {}
let v62;
try { v62 = v61(); } catch (e) {}
let v63;
try { v63 = v62(f33); } catch (e) {}
let v64;
try { v64 = v63(); } catch (e) {}
let v65;
try { v65 = v64(f30); } catch (e) {}
let v66;
try { v66 = v65(); } catch (e) {}
let v67;
try { v67 = v66(f26); } catch (e) {}
try { v67(); } catch (e) {}
