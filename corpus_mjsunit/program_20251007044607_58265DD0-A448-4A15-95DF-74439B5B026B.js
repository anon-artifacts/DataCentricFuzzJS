try {
    function f0() {
    }
    {
        const v4 = Month?.March;
        let v6;
        try { v6 = new Date(2040, v4, 31); } catch (e) {}
        let dt1 = v6;
        const v11 = Month?.November;
        let v13;
        try { v13 = new Date(2040, v11, 1); } catch (e) {}
        let dt2 = v13;
    }
    {
        const v20 = Month?.March;
        let v22;
        try { v22 = new Date(2038, v20, 31); } catch (e) {}
        let dt1 = v22;
        const v27 = Month?.November;
        let v29;
        try { v29 = new Date(2038, v27, 1); } catch (e) {}
        let dt2 = v29;
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e39) {
}
