function testConcatRevokedProxyToArrayInPrototype() {
    'use strict';
    const v11 = {
        get(a2, a3) {
            if (a3 === Symbol?.isConcatSpreadable) {
                try { p.revoke(); } catch (e) {}
            }
            return target?.[a3];
        },
    };
    var handler = v11;
    const v13 = [];
    let v15;
    try { v15 = Proxy.revocable(v13, handler); } catch (e) {}
    var p = v15;
    const v17 = p?.proxy;
    var target = { __proto__: v17 };
    function f20() {
        const v21 = [];
        try { v21.concat(target); } catch (e) {}
    }
    try { f20(); } catch (e) {}
}
try { testConcatRevokedProxyToArrayInPrototype(); } catch (e) {}
