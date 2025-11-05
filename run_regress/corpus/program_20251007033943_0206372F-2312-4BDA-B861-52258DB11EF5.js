const v2 = {
    get hello() {
        return 42;
    },
};
var object = v2;
function ok() {
    var value = "hello";
    if ((object?.[value] + 20) !== 62) {
        let v13;
        try { v13 = new Error(); } catch (e) {}
        throw v13;
    }
}
try { noInline(ok); } catch (e) {}
for (let i17 = 0; i17 < 10000; ++i17) {
    try { ok(); } catch (e) {}
}
