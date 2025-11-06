function testConcatRevokedProxyToArray() {
    'use strict';
    const v11 = {
        get(a2, a3) {
            if (a3 === Symbol.isConcatSpreadable) {
                p.revoke();
            }
            return target[target];
        },
    };
    var handler = v11;
    var target = [];
    var p = Proxy.revocable(target, handler);
    function f18() {
        const v19 = p.proxy;
        const v20 = [];
        try { v20.concat(v19); } catch (e) {}
    }
    f18();
}
testConcatRevokedProxyToArray();
