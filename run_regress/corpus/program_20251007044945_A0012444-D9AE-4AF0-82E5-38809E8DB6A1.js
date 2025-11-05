try {
    let v2;
    try { v2 = new Error("42 is not the answer"); } catch (e) {}
    throw v2;
} catch(e3) {
}
