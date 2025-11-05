try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        anyTypedArrayConstructors?.[0]?.from === v2?.from;
        const v11 = [1,2,3];
        let v12;
        try { v12 = new v2(v11); } catch (e) {}
        var src = v12;
        let v14;
        try { v14 = v2.from(src); } catch (e) {}
        var copy = v14;
        copy === src;
        copy instanceof v2;
        const v22 = [0,1];
        let v23;
        try { v23 = new v2(v22); } catch (e) {}
        var a = v23;
        a.name = "lisa";
        try { v2.from(a); } catch (e) {}
        const v29 = [0,1];
        try { new v2(v29); } catch (e) {}
        src = { 0: 0, 1: 1, length: 2 };
        let v35;
        try { v35 = v2.from(src); } catch (e) {}
        (copy = v35) instanceof v2;
        const v40 = [0,1];
        try { new v2(v40); } catch (e) {}
        const v48 = {
            0: "0",
            1: "1",
            2: "two",
            9: "nine",
            name: "lisa",
            length: 2,
        };
        src = v48;
        try { v2.from(src); } catch (e) {}
        const v52 = [0,1];
        try { new v2(v52); } catch (e) {}
        const v54 = {};
        try { v2.from(v54); } catch (e) {}
        try { new v2(); } catch (e) {}
        try { v2.from(1); } catch (e) {}
        try { new v2(); } catch (e) {}
        try { v2.from("123"); } catch (e) {}
        const v65 = [1,2,3];
        try { new v2(v65); } catch (e) {}
        try { v2.from(true); } catch (e) {}
        try { new v2(); } catch (e) {}
        let v71;
        try { v71 = Symbol(); } catch (e) {}
        try { v2.from(v71); } catch (e) {}
        try { new v2(); } catch (e) {}
        src = { length: 2, 1: "1", 0: "0" };
        try { v2.from(src); } catch (e) {}
        const v81 = [0,1];
        try { new v2(v81); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e89) {
}
