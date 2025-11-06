try {
    function test() {
        let v4;
        try { v4 = new RegExp("\w", "y"); } catch (e) {}
        var re = v4;
        try { re.exec("xy"); } catch (e) {}
        let v9;
        try { v9 = re.exec("xy"); } catch (e) {}
        return v9?.[0] === "y";
    }
    let v13;
    try { v13 = test(); } catch (e) {}
    if (!v13) {
        let v17;
        try { v17 = new Error("Test failed"); } catch (e) {}
        throw v17;
    }
} catch(e18) {
}
