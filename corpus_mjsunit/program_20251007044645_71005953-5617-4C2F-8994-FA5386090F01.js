try {
    function f0() {
    }
    let v2;
    try { v2 = newGlobal(); } catch (e) {}
    var g = v2;
    var arr = [1,2,3];
    for (const v10 of anyTypedArrayConstructors) {
        let v11;
        try { v11 = new v10(arr); } catch (e) {}
        var tarr = v11;
        for (const v13 of anyTypedArrayConstructors) {
            let v14;
            try { v14 = new v13(tarr); } catch (e) {}
            var copied = v14;
            copied?.buffer?.byteLength;
            arr?.length * v13?.BYTES_PER_ELEMENT;
            g.tarr = tarr;
            const v22 = `new ${v13?.name}(tarr);`;
            let v23;
            try { v23 = g.eval(v22); } catch (e) {}
            (copied = v23)?.buffer?.byteLength;
            arr?.length * v13?.BYTES_PER_ELEMENT;
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e35) {
}
