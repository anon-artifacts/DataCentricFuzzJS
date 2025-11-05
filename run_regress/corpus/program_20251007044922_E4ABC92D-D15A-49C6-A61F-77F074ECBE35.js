try {
    let r1 = /\k</;
    let didThrow = false;
    try {
        let v7;
        try { v7 = new RegExp("\k<1>", "u"); } catch (e) {}
        let r2 = v7;
        didThrow = false;
    } catch(e10) {
        didThrow = true;
    }
    if (!didThrow) {
        throw "Trying to create a named capture reference that starts with a number should Throw";
    }
} catch(e14) {
}
