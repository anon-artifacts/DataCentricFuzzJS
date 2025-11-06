function f0() {
}
top();
function top() {
    f().catch(catchError);
}
async function f() {
    try { g(); } catch (e) {}
}
function g() {
    try { saveStack(); } catch (e) {}
    let v14;
    try { v14 = saveStack(); } catch (e) {}
    let frame = v14;
    frame?.functionDisplayName;
    let v19;
    try { v19 = parent(frame); } catch (e) {}
    v19?.functionDisplayName;
    let v22;
    try { v22 = parent(frame); } catch (e) {}
    let v23;
    try { v23 = parent(v22); } catch (e) {}
    v23?.functionDisplayName;
}
function parent(a27) {
    do {
        a27 = a27?.parent || a27?.asyncParent;
    } while ((() => {
            const v31 = /self-hosted/;
            const v32 = a27?.source;
            let v33;
            try { v33 = v32.match(v31); } catch (e) {}
            return v33;
        })())
    return a27;
}
function catchError(a35) {
    const v37 = `${a35}\n${a35?.stack}`;
    try { f0(v37); } catch (e) {}
    try { quit(1); } catch (e) {}
}
