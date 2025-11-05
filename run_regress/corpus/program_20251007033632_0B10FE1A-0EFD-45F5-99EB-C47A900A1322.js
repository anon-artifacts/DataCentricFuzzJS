function sparse() {
    var o = { 0: 0, 65536: 0 };
    var tests = [[1,false],[0,true],[-2,false],[65536,true],[131072,false]];
    for (const v23 of tests) {
        key in o;
        try { o.hasOwnProperty(key); } catch (e) {}
    }
}
function typedArray() {
    var o = { 0: 0, 65536: 0 };
    const v35 = new Int32Array(65537);
    var t = v35;
    var tests = [[1,[false,true]],[0,[true,true]],[-2,[false,false]],[65536,[true,true]],[131072,[false,false]]];
    for (let i66 = 0; i66 < 10; i66++) {
        for (const v72 of tests) {
            key in o;
            i66 > 5 ? 1 : 0;
            has?.[has];
            try { o.hasOwnProperty(key); } catch (e) {}
            i66 > 5 ? 1 : 0;
            has?.[has];
        }
        if (i66 == 5) {
            o = t;
        }
    }
}
function protoChange() {
    var o = { 0: 0, 65536: 0 };
    var tests = [[1,[false,true]],[0,[true,true]],[-2,[false,false]],[65536,[true,true]],[131072,[false,false]]];
    for (let i125 = 0; i125 < 10; i125++) {
        for (const v131 of tests) {
            key in o;
            i125 > 5 ? 1 : 0;
            has?.[has];
            try { o.hasOwnProperty(key); } catch (e) {}
            has?.[0];
        }
        if (i125 == 5) {
            o.__proto__ = [1,1,1,1];
        }
    }
}
try { sparse(); } catch (e) {}
try { typedArray(); } catch (e) {}
try { protoChange(); } catch (e) {}
