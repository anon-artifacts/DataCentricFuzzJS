function propCacheTest() {
    var obj = {};
    const v3 = /((aa))/;
    let v5;
    try { v5 = ("aabccddeeffaaggaabbaabaabaab").match(v3); } catch (e) {}
    var matches = v5;
    for (const v7 in matches) {
        if (obj?.[matches?.[v7]] !== undefined) {
            try { WScript.Echo("propertyFound"); } catch (e) {}
        }
    }
    return matches;
}
let v15;
try { v15 = propCacheTest(); } catch (e) {}
var props = v15;
for (let i18 = 0; i18 < props?.length; i18++) {
    const v24 = props?.[i18];
    try { WScript.Echo(v24); } catch (e) {}
}
try { CollectGarbage(); } catch (e) {}
try { CollectGarbage(); } catch (e) {}
try { CollectGarbage(); } catch (e) {}
let v31;
try { v31 = propCacheTest(); } catch (e) {}
props = v31;
for (let i33 = 0; i33 < props?.length; i33++) {
    const v39 = props?.[i33];
    try { WScript.Echo(v39); } catch (e) {}
}
