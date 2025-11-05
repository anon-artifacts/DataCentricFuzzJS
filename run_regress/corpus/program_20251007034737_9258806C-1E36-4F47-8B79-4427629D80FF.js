try {
    const v1 = { newCompartment: true };
    let v3;
    try { v3 = newGlobal(v1); } catch (e) {}
    let g = v3;
    const v11 = {
        start(a7) {
            try { a7.enqueue("ponies"); } catch (e) {}
            try { a7.close(); } catch (e) {}
        },
    };
    let v12;
    try { v12 = new ReadableStream(v11); } catch (e) {}
    let stream = v12;
    g.stream = stream;
    try { g.eval("var reader = ReadableStream.prototype.getReader.call(stream);"); } catch (e) {}
    const v16 = () => {
        let v18;
        try { v18 = g.eval("reader.read()"); } catch (e) {}
        return v18;
    };
    try { v16(); } catch (e) {}
    g?.TypeError;
    try { g.eval("reader.releaseLock();"); } catch (e) {}
} catch(e24) {
}
