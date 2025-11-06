for (let i1 = 1; i1 < 1000; i1++) {
    const v12 = {
        start(a9) {
            try { a9.enqueue(7); } catch (e) {}
        },
    };
    let v13;
    try { v13 = new ReadableStream(v12); } catch (e) {}
    let stream = v13;
    let v15;
    try { v15 = stream.getReader(); } catch (e) {}
    let reader = v15;
    try { oomAfterAllocations(i1); } catch (e) {}
    try {
        try { reader.read(); } catch (e) {}
        i1 = 1000;
    } catch(e21) {
    }
}
