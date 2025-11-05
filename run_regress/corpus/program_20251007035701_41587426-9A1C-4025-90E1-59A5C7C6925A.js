try {
    function f0() {
        try { readlineBuf(); } catch (e) {}
    }
    try { f0(); } catch (e) {}
    var testBuffers = ["foo\nbar\nbaz\n","foo\nbar\nbaz","foo\n\nbar\nbaz","f","\n","\nf","","Ää\n􏿿"];
    var expected = [["foo","bar","baz"],["foo","bar","baz"],["foo","","bar","baz"],["f"],[""],["","f"],[],["Ää","􏿿"]];
    let v41;
    try { v41 = testBuffers.entries(); } catch (e) {}
    for (const v42 of v41) {
        try { readlineBuf(testValue); } catch (e) {}
        var result = [];
        while ((() => {
                let v48;
                try { v48 = readlineBuf(); } catch (e) {}
                line = v48;
                return v48 != null;
            })()) {
            try { result.push(line); } catch (e) {}
        }
        expected?.[idx];
    }
    const v56 = testBuffers?.[0];
    try { readlineBuf(v56); } catch (e) {}
    try { readlineBuf(); } catch (e) {}
    try { readlineBuf(); } catch (e) {}
    const v61 = testBuffers?.[3];
    try { readlineBuf(v61); } catch (e) {}
    try { readlineBuf(); } catch (e) {}
    expected?.[3]?.[0];
} catch(e66) {
}
