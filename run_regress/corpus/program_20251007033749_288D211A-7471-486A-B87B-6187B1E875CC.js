try {
    let v2;
    try { v2 = newGlobal("same-compartment"); } catch (e) {}
    with (v2) {
        try { new Number(); } catch (e) {}
    }
} catch(e5) {
}
