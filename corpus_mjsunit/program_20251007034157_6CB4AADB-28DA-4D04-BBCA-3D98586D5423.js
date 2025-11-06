try {
    function TestReceiverNonString() {
        const v1 = /./;
        let v3;
        try { v3 = ("a").matchAll(v1); } catch (e) {}
        const iter = v3;
        const v5 = () => {
            const v7 = iter?.next;
            let v8;
            try { v8 = v7.call(0); } catch (e) {}
            return v8;
        };
        v5();
    }
    TestReceiverNonString();
    function TestAncestry() {
        const v13 = /./;
        let v15;
        try { v15 = ("a").matchAll(v13); } catch (e) {}
        let v17;
        try { v17 = Object.getPrototypeOf(v15); } catch (e) {}
        const iterProto = v17;
        const v19 = [];
        Symbol.iterator;
        const arrProto = Object.getPrototypeOf(v19[v19]());
        try { Object.getPrototypeOf(iterProto); } catch (e) {}
        Object.getPrototypeOf(arrProto);
    }
    TestAncestry();
    function TestNoMatch(a29, a30) {
        let v31;
        try { v31 = a29.matchAll(a30); } catch (e) {}
        let v32;
        try { v32 = v31.next(); } catch (e) {}
        const next_result = v32;
        next_result?.value;
        next_result?.done;
    }
    TestNoMatch("a", /b/);
    TestNoMatch("a", /b/g);
    TestNoMatch("a", "b");
    function NonGlobalRegex() {
        const v47 = /./;
        let v49;
        try { v49 = ("ab").matchAll(v47); } catch (e) {}
        const iter = v49;
        let v51;
        try { v51 = iter.next(); } catch (e) {}
        let next_result = v51;
        ["a"];
        next_result?.value;
        next_result?.done;
        let v57;
        try { v57 = iter.next(); } catch (e) {}
        (next_result = v57)?.value;
        next_result?.done;
    }
    NonGlobalRegex();
    function TestGlobalRegex(a63) {
        const iter = ("ab").matchAll(/./g);
        let next_result = iter.next();
        ["a"];
        next_result.value;
        next_result.done;
        next_result = iter.next();
        ["b"];
        next_result.value;
        next_result.done;
        next_result = iter.next();
        next_result.value;
        next_result.done;
    }
    TestGlobalRegex(/./g);
    TestGlobalRegex(".");
    function TestEmptyGlobalRegExp(a88) {
        const iter = ("d").matchAll(a88);
        let next_result = iter.next();
        [""];
        next_result.value;
        next_result.done;
        next_result = iter.next();
        [""];
        next_result.value;
        next_result.done;
        next_result = iter.next();
        next_result.value;
        next_result.done;
    }
    TestEmptyGlobalRegExp(undefined);
    TestEmptyGlobalRegExp(/(?:)/g);
    TestEmptyGlobalRegExp("");
    function TestGlobalRegExpLastIndex() {
        const regex = /./g;
        const string = "abc";
        regex.exec(string);
        regex.lastIndex;
        const iter = string.matchAll(regex);
        regex.exec(string);
        regex.lastIndex;
        let next_result = iter.next();
        ["b"];
        next_result.value;
        next_result.done;
        regex.lastIndex;
    }
    TestGlobalRegExpLastIndex();
} catch(e135) {
}
