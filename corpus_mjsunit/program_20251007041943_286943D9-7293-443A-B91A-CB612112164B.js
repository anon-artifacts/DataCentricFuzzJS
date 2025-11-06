const v2 = {
    get hello() {
        return 42;
    },
};
var object = v2;
let v5;
try { v5 = Symbol(); } catch (e) {}
var symbol = v5;
function f7() {
    return 42;
}
const v9 = { get: f7 };
try { Object.defineProperty(object, symbol, v9); } catch (e) {}
function ok() {
    if ((object?.[symbol] + 20) !== 62) {
        let v19;
        try { v19 = new Error(); } catch (e) {}
        throw v19;
    }
}
try { noInline(ok); } catch (e) {}
for (let i23 = 0; i23 < 10000; ++i23) {
    try { ok(); } catch (e) {}
}
