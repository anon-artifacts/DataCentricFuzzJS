try { gcslice(0); } catch (e) {}
function testChangeParam(a4) {
    let v6;
    try { v6 = gcparam(a4); } catch (e) {}
    let prev = v6;
    try { gcparam(a4, prev); } catch (e) {}
}
try { testChangeParam("maxMallocBytes"); } catch (e) {}
