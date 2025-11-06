function baz() {
}
try { noInline(baz); } catch (e) {}
function foo() {
    let i;
    let j;
    let a0 = [0,1];
    let a1 = [];
    for ((() => {
            i = 0;
        })();
        i < a0?.length;
        i++) {
        try { a1.push(); } catch (e) {}
        for ((() => {
                j = 0;
            })();
            j < 6;
            j++) {
        }
        for ((() => {
                j = 0;
            })();
            j < 4;
            j++) {
            try { baz(); } catch (e) {}
        }
    }
    let v29;
    try { v29 = new Error(); } catch (e) {}
    throw v29;
}
try {
    try { new foo(); } catch (e) {}
} catch(e31) {
}
